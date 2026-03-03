const express = require('express');
const router = express.Router();

const lab13Controller = require('../controllers/lab13controller');

router.get('/lab3', lab13Controller.get_lab3);

router.get('/validacionLab6', lab13Controller.get_lab6file);

router.get('/lab11', lab13Controller.get_lab11);

router.get('/lab12', lab13Controller.get_lab12);

router.get('/lab13', lab13Controller.get_lab13);

router.get('/', lab13Controller.get_labs);

module.exports = router;