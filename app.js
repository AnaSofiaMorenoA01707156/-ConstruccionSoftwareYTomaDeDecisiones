console.log("running");

const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, '.', 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const rutasLabs = require('./routes/labs.routes');
app.use('/laboratorios', rutasLabs);

const rutasUsuarios = require('./routes/users.routes');
app.use('/forms', rutasUsuarios);

app.use('/home', (request, response, next) => {
    response.render('home', {username: request.session.username, nombre: request.session.nombre, color: request.session.color});
});

app.use((request, response, next) => {
    response.status(404).send("La página que estás buscando no existe.");
});

app.listen(3000);