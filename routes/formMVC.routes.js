const express = require('express');
const router = express.Router();

const lab13Controller = require('../controllers/lab13controller');

router.get('/registro', lab13Controller.get_registro);

router.post('/registro', lab13Controller.post_registro);

router.use('/visitas', lab13Controller.get_visitas);

module.exports = router;