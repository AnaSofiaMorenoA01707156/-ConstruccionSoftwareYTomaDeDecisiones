const Visitante = require('../models/visitantes.model');
const path = require('path');

exports.get_lab3 = (request, response, next) => {
    response.render('lab3');
};

exports.get_lab6file = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'public', 'validacionPswds.html'));
};

exports.get_lab11 = (request, response, next) => {
    response.render('lab11');
};

exports.get_lab12 = (request, response, next) => {
    response.render('lab12');
};

exports.get_lab13 = (request, response, next) => {
    response.render('lab13');
};

exports.get_labs = (request, response, next) => {
    response.render('laboratorios');
};

exports.get_registro = (request, response, next) => {
    response.render('registro'); 
};

exports.post_registro = (request, response, next) => {
    const visitante = new Visitante(request.body.nombre, request.body.color); //instancia de la clase
    visitante.save();
    response.redirect('/forms/visitas');
};

exports.get_visitas = (request, response, next) => {
    response.render('visitas', {visitantes: Visitante.fetchAll()}); //hace referencia a la clase directamente
};