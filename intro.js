//DOCUMENTO DE INTRODUCCIÓN A JAVASCRIPT
//Javascript es un lenguaje no tipado (no es necesario declarar el tipo de dato), pero sí si es una variable o una constante.

//consola(log, info, warn, error, assert) --> diferentes formas de mostrar en pantalla (consola)
console.log("hola mundo!");
console.info("Esto es información");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

//compara valores
console.assert(1 == true);

//compara valores y tipo de dato
console.assert(1 === true);

//-------------variables, constantes----------
//Las variables pueden modificarse por el usuario (!), las constantes no.

//forma antigua de declararlas, no recomendada
var videojuego_1="Minecraft"; //puede ser accesada en cualquier punto del javascript

//forma moderna, recomendada
let videojuego_2= "Halo"; //la variable va a vivir en el ámbito en el que está declarada solamente

//constantes
const precio= 55;

//------------funciones------------------
function is_precio(){
    return precio;
}

console.log(is_precio);