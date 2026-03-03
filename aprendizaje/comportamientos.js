//DOCUMENTO DE INTRODUCCIÓN A COMPORTAMIENTOS EN UN SITIO WEB USANDO JAVASCRIPT

//Visualizar el DOM (Document Object Model) en la consola. Incluye atributos, html interno, etc.
//console.log(document)

const videojuego = {
    nombre: "Halo",
    imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/976730/header.jpg?t=1740682623",
    descripcion: `Halo es una aclamada franquicia de videojuegos de disparos en primera persona (FPS) 
        de ciencia ficción, creada por Bungie y desarrollada actualmente por 343 Industries para 
        Xbox y PC, centrada en el supersoldado Jefe Maestro y su IA, Cortana.`,
    genero: ["Shooter"],
}

//Modificar el DOM: 
const halo = document.getElementById("miNombre"); //recuperar un elemento usando su ID
console.log(halo);

const mostrar_descripcion = () => {
    console.log("click en halo");
    //sustituye el elemento por lo declarado:
    halo.innerHTML = `<p class='is-size-3'>${videojuego.nombre}</p>
        <p>${videojuego.descripcion}</p>
        <span class="tag">${videojuego.genero[0]}</span>`; 
    halo.onclick = mostrar_imagen; //ejecuta la acción al hacer clic en el elemento
}

const mostrar_imagen = () => {
    halo.innerHTML = 
        `<figure class="image">
            <img class="is-rounded" src="${videojuego.imagen}}" />
        </figure>`;
    halo.onclick = mostrar_descripcion;
}

mostrar_imagen();

halo.onclick = mostrar_descripcion;