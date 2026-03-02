const visitantes= [{nombre: "Ana Sofía", color: "morado"}];

const path = require('path');

exports.get_lab3 = (request, response, next) => {
    response.render('lab3');
};

exports.get_lab6file = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'laboratorio6', 'validacionPswds.html'));
};

exports.get_lab11 = (request, response, next) => {
    response.render('lab11');
};

exports.get_lab12 = (request, response, next) => {
    response.render('lab12');
};

exports.get_labs = (request, response, next) => {
    response.render('laboratorios');
};

exports.get_registro = (request, response, next) => {
    response.render('registro'); 
};

exports.post_registro = (request, response, next) => {
    visitantes.push(request.body);
    response.redirect('/forms/visitas');
};

exports.get_visitas = (request, response, next) => {
    response.render('visitas', {visitantes: visitantes}); 
};