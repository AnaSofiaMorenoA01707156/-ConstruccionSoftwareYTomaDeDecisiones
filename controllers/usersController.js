const Visitante = require('../models/visitantes.model');
const bcrypt = require('bcrypt');

exports.get_registro = (request, response, next) => {
    response.render('registro', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        username: request.session.username || '',
        nombre: request.session.nombre || '',
    }); 
};

exports.post_registro = (request, response, next) => {
    const visitante = new Visitante(request.body.username, request.body.nombre, request.body.color, request.body.password); //instancia de la clase
    response.setHeader('Set-Cookie', `ultimo_color=${visitante.color}; Secure`);
    request.session.isLoggedIn = true;
    request.session.username = request.body.username;
    request.session.nombre = request.body.nombre;
    request.session.color = request.body.color;
    visitante.save().then(() => {
        return response.redirect('/home');
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

exports.get_ingreso = (request, response, next) => {
    const error = request.session.error || ''; //guardar el error en una variable para usarlo en el render
    request.session.error = '';    //borrar el error para que no se quede guardado en la sesión
    response.render('ingreso', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        error: error,
        username: request.session.username || '',
    }); 
};

exports.post_ingreso = (request, response, next) => {
    Visitante.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if (rows.length < 1) {
            request.session.error = 'El usuario no existe (no está registrado en el sistema).';
            return response.redirect('/forms/inicioSesion');
        } else {
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    Visitante.fetchName(request.session.username).then(([nombres, fieldData]) => {
                        request.session.nombre = nombres[0].nombre;
                        /* 
                            [
                                { nombre: "sofi" }
                            ]
                        */
                        Visitante.fetchColor(request.session.username).then(([colores, fieldData]) => {
                            request.session.color = colores[0].color;
                            return request.session.save((error) => {
                                return response.redirect('/home');
                            });
                       }).catch((error) => {
                            console.log(error);
                            next(error);
                       });

                    }).catch((error) => {
                        console.log(error);
                        next(error);
                    });
                } else {
                    request.session.error = 'El usuario y/o password no coinciden.';
                    return response.redirect('/forms/inicioSesion');
                }
            }).catch((error) => {
                console.log(error);
                throw error;
            });
        }
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_cambioColor = (request, response, next) => {
    response.render('edicion', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        username: request.session.username || '',
    }); 
};

exports.post_cambioColor = (request, response, next) => {
    const nuevoColor = request.body.color2; 
    request.session.color = request.body.color2;
    const username = request.session.username;
    Visitante.editColor(nuevoColor, username).then(() => {
        return response.redirect('/home');
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

exports.get_visitas = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.params.visitante_id);
    Visitante.fetch(request.params.visitante_id).then(([rows, fieldData]) => {
        return response.render('visitas', {
            isLoggedIn: request.session.isLoggedIn || '',
            username: request.session.username || '',
            visitantes: rows,});
    }).catch((error) => {
        console.log(error);
        throw error;});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/home'); //Este código se ejecuta cuando la sesión se elimina.
    });
};