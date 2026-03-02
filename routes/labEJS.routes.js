const express = require('express');
const router = express.Router();

const path = require('path');

router.use('/lab3', (request, response, next) => {
    response.render('lab3');
});

router.get('/validacionLab6', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'laboratorio6', 'validacionPswds.html'));
});

router.use('/lab11', (request, response, next) => {
    response.render('lab11');
});

router.use('/lab12', (request, response, next) => {
    response.render('lab12'); 
});

router.use((request, response, next) => {
    response.render('laboratorios');
});

module.exports = router;