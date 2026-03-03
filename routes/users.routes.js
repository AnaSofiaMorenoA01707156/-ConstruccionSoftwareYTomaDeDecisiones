const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/registro', usersController.get_registro);

router.post('/registro', usersController.post_registro);

router.use('/visitas', usersController.get_visitas);

router.get('/cerrarSesion', usersController.get_logout);

module.exports = router;