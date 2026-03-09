const express = require('express');
const router = express.Router();

const labsController = require('../controllers/labsController');

router.get('/lab17', labsController.get_lab17);

router.get('/validacionLab6', labsController.get_lab6file);

router.get('/lab11', labsController.get_lab11);

router.get('/lab12', labsController.get_lab12);

router.get('/lab13', labsController.get_lab13);

router.get('/', labsController.get_labs);

module.exports = router;