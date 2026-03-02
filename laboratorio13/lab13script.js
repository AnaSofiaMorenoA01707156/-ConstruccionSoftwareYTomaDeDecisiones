console.log("running");

const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'laboratorio6')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasLabs = require('../routes/labMVC.routes');
app.use('/laboratorios', rutasLabs);

const rutasFormas = require('../routes/formMVC.routes');
app.use('/forms', rutasFormas);

app.use('/home', (request, response, next) => {
    response.render('home');
});

app.use((request, response, next) => {
    response.status(404).send("La página que estás buscando no existe.");
});

app.listen(3000);