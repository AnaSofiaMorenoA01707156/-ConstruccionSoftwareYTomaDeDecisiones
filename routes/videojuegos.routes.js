const express = require('express');
const router = express.Router();
const path = require('path');

module.exports = router;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Videojuegos
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
<form action="/videojuegos/html" method="POST">
  <div class="field">
    <label for="nombre" class="label">Nombre</label>
    <div class="control">
      <input id="nombre" name="nombre" class="input" type="text" placeholder="e.g Minecraft">
    </div>
  </div>

  <div class="field">
    <label for="imagen" class="label">Imagen</label>
    <div class="control">
      <input id="imagen" name="imagen" class="input" type="text" placeholder="e.g. https://store-images.s-microsoft.com/image/routers.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270">
    </div>
  </div>

  <input class="button is-primary" type="submit" value="Guardar">
</form>
     </div>
    </section>
  <!--script src="js/comportamientos.js"></script-->
  </body>
</html>  
`;

const videojuegos = [
  {
    nombre: "Minecraft",
    imagen: "https://store-images.s-microsoft.com/image/routers.58378.13850085746326678.826cc014-d610-46af-bdb3-c5c96be4d22c.64287a91-c69e-4723-bb61-03fecd348c2a?q=90&w=480&h=270"
  },
  {
    nombre: "Gears of war",
    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Gears_of_war_cover_art.jpg/250px-Gears_of_war_cover_art.jpg"
  },
];

//MIDDLEWARES: Facilitan el uso de servidores web, comunica aplicaciones.
router.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Middlewares con rutas: solo arrojará la respuesta si se usa esa ruta en el enlace (todas las que usen la ruta, independientemente si añade más después)
router.use('/ruta1', (request, response, next) => {
    response.send('Bienvenido a la ruta 1'); 
});

//Middleware con página html
router.get('/html', (request, response, next) => { //se arroja con la ruta Y con el método de get, continúa gracias a next
    response.send(html); 
});

router.post('/html', (request, response, next) => { //viene del anterior, se arroja con la misma ruta PERO con el método post (al enviar formulario)
    console.log(request.body); //gracias al bodyparser
    videojuegos.push(request.body);
    response.redirect('/videojuegos');
});

router.get('/labs', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'laboratorio6', 'validacionPswds.html'));
});

router.use((request, response, next) => {
    console.log('Otro middleware!');
    let html_index = `
              <a href="/videojuegos/html"><button class="button is-primary">Nuevo videojuego</button></a>
              <div class="columns">`;

        for (let juego of videojuegos) {
            html_index += `
                <div class="column">
                    ${juego.nombre}
                    <figure class="image">
                        <img class="is-rounded" src="${juego.imagen}" />
                    </figure>
                </div>`;
        }
        
        html_index += `    
              </div>
            </div>
          </section>
          <section class="section">
            <div class="container">
              <div class="columns">
                <div class="column">
                </div>
              </div>  
          `;

    response.send(html_index);//Manda la respuesta
});