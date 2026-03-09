const Visitante = require('../models/visitantes.model');

exports.get_registro = (request, response, next) => {
    response.render('registro', {
        username: request.session.username || '',
        nombre: request.session.nombre || '',
    }); 
};

exports.post_registro = (request, response, next) => {
    const visitante = new Visitante(request.body.username, request.body.nombre, request.body.color, request.body.password); //instancia de la clase
    response.setHeader('Set-Cookie', `ultimo_color=${visitante.color}; Secure`);
    request.session.username = request.body.username;
    request.session.nombre = request.body.nombre;
    request.session.color = request.body.color;
    visitante.save().then(() => {
        return response.redirect('/forms/visitas');
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

exports.get_ingreso = (request, response, next) => {
    response.render('ingreso', {
        username: request.session.username || '',
    }); 
};

exports.post_ingreso = (request, response, next) => {
    request.session.username = request.body.username;
    //request.session.color = request.body.color;
    visitante.save().then(() => {
        return response.redirect('/home');
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

exports.get_cambioColor = (request, response, next) => {
    response.render('edicion'); 
};

exports.post_cambioColor = (request, response, next) => {
    const nuevoColor = request.body.color2; 
    request.session.color = request.body.color2;
    const username = request.session.username;
    Visitante.editColor(nuevoColor, username).then(() => {
        return response.redirect('/forms/visitas');
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

exports.get_visitas = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.params.visitante_id);
    Visitante.fetch(request.params.visitante_id).then(([rows, fieldData]) => {
        return response.render('visitas', {visitantes: rows,});
    }).catch((error) => {
        console.log(error);
        throw error;});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/home'); //Este código se ejecuta cuando la sesión se elimina.
    });
};