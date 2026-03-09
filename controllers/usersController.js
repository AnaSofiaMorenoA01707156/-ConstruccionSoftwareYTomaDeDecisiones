const Visitante = require('../models/visitantes.model');
exports.get_registro = (request, response, next) => {
    response.render('registro'); 
};

exports.post_registro = (request, response, next) => {
    const visitante = new Visitante(request.body.nombre, request.body.color); //instancia de la clase
    response.setHeader('Set-Cookie', `ultimo_color=${visitante.color}; Secure`);
    request.session.nombre = request.body.nombre;
    request.session.color = request.body.color;
    visitante.save().then(() => {
        return response.redirect('/forms/visitas');
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
    const nombre = request.session.nombre;
    Visitante.editColor(nuevoColor, nombre).then(() => {
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