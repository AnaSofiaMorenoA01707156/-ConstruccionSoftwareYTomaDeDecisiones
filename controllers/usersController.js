const Visitante = require('../models/visitantes.model');
exports.get_registro = (request, response, next) => {
    response.render('registro'); 
};

exports.post_registro = (request, response, next) => {
    const visitante = new Visitante(request.body.nombre, request.body.color); //instancia de la clase
    visitante.save();
    response.setHeader('Set-Cookie', `ultimo_color=${visitante.color}; Secure`);
    request.session.nombre = request.body.nombre;
    response.redirect('/forms/visitas');
};

exports.get_visitas = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('visitas', {visitantes: Visitante.fetchAll()}); //hace referencia a la clase directamente
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/home'); //Este código se ejecuta cuando la sesión se elimina.
    });
};