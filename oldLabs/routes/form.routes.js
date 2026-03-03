const express = require('express');
const router = express.Router();

const forma=`
        <section>
            <hr>
            <h2>Registro de visita</h2>
            <h3>Gracias por visitar el sitio! Escribe aquí tu nombre y color favorito para registrar tu visita.</h3>
            <form action="/forms/registro" method="POST">
                <div>
                    <label for="nombre">Nombre:<br></label>
                    <input type="text" name="nombre"/>
                </div>
                <div>
                    <label for="color">Color favorito:<br></label>
                    <input type="text" name="color"/>
                </div>
                <div>
                    <input type="submit" value="Registrar"/>
                </div>
            </form><br>
            <a href="/home">
            <button>Regresar a Home</button>
            </a><br>
            <hr>
        </section>`;

const visitantes= [{nombre: "Ana Sofía", color: "morado"}];

router.get('/registro', (request, response, next) => {
    response.send(forma); 
});

router.post('/registro', (request, response, next) => {
    visitantes.push(request.body);
    response.redirect('/forms/visitas');
});

router.use('/visitas', (request, response, next) =>{
    let visitas=`
        <section>
            <hr>
            <h3>Visitantes del sitio (y su color favorito):</h3>`;
        for (let visita of visitantes) {
            visitas += `
                <p>${visita.nombre}, ${visita.color}</p>`;
        }
        visitas += `
            <a href="/laboratorios">
            <button>Regresar</button></a>
            <hr>
        </section>`;
        response.send(visitas);
});

module.exports = router;