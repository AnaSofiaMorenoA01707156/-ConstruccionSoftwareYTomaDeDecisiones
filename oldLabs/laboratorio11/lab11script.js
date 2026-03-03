console.log("running");

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasLabs = require('../routes/lab.routes');
app.use('/laboratorios', rutasLabs);

const rutasFormas = require('../routes/form.routes');
app.use('/forms', rutasFormas);

const options= `
<!DOCTYPE html>
<html lang="es">
    <head>
       <meta charset="UTF-8">
       <title>Home</title> 
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" type= "text/css"/>
    </head>
    <body>
        <h1 class="titulo">Home page</h1>
        <br>
        <a href="/laboratorios">
            <button>Ver laboratorios</button>
        </a><br><br><br>
        <a href="/forms/registro">
            <button>Registrar mi visita</button>
        </a>
    </body>
</html>`;

app.use('/home', (request, response, next) => {
    response.send(options);
});

app.use((request, response, next) => {
    response.status(404).send("La página que estás buscando no existe.");
});

app.listen(3000);