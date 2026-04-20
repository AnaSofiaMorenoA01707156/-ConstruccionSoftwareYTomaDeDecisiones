const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const usersController = require('../controllers/usersController');

router.get('/registro', usersController.get_registro);

router.post('/registro', usersController.post_registro);

router.get('/inicioSesion', usersController.get_ingreso);

router.post('/inicioSesion', usersController.post_ingreso);

router.get('/edicion', isAuth, usersController.get_cambioColor);

router.post('/edicion', isAuth, usersController.post_cambioColor);

router.get('/visitas', isAuth, usersController.get_visitas);

router.get('/visitas/fotoVisita/:visita', isAuth, usersController.get_fotoVisita);

router.get('/visitas/:visitante_id', isAuth, usersController.get_visitas);

router.get('/transferirPuntos', isAuth, usersController.get_transferirPuntos);

router.post('/transferirPuntos', isAuth, usersController.post_transferirPuntos);

router.get('/cerrarSesion', usersController.get_logout);

module.exports = router;