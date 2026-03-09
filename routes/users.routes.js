const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/registro', usersController.get_registro);

router.post('/registro', usersController.post_registro);

router.get('/edicion', usersController.get_cambioColor);

router.post('/edicion', usersController.post_cambioColor);

router.get('/visitas', usersController.get_visitas);

router.get('/visitas/:visitante_id', usersController.get_visitas);

router.get('/cerrarSesion', usersController.get_logout);

module.exports = router;