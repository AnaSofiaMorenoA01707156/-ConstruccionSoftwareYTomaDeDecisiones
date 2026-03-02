const express = require('express');
const router = express.Router();

const lab13Controller = require('../controllers/lab13controller');

router.use('/lab3', lab13Controller.get_lab3);

router.use('/validacionLab6', lab13Controller.get_lab6file);

router.use('/lab11', lab13Controller.get_lab11);

router.use('/lab12', lab13Controller.get_lab12);

router.use(lab13Controller.get_labs);

module.exports = router;