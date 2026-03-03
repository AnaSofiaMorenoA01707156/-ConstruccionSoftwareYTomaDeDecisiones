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