const express = require('express');
const router = express.Router();

const visitantes= [{nombre: "Ana Sofía", color: "morado"}];

router.get('/registro', (request, response, next) => {
    response.render('registro'); 
});

router.post('/registro', (request, response, next) => {
    visitantes.push(request.body);
    response.redirect('/forms/visitas');
});

router.use('/visitas', (request, response, next) =>{
    response.render('visitas', {visitantes: visitantes}); 
});

module.exports = router;