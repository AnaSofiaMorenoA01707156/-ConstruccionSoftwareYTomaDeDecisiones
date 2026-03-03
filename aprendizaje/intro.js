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

//prueba de su alcance al declararse en un ámbito
{
    var minecraft = "5 estrellas";
    let halo = "4 estrellas"
}

console.log(minecraft); //sí se muestra porque sigue viviendo fuera del ámbito
//console.log(halo); //muestra un error porque la variable murió al terminar el ámbito en que se declaró

//constantes
const precio= 55;

//------------funciones------------------
function is_precio(){
    return precio;
}
//declaración moderna de funciones: anónimas
() => {}
const vidas = () => {      //guarda su dirección (apuntador) en una variable y al llamar a la variable ejecuta la función
    console.log("Te quedan 3 vidas");
}
vidas(); //la variable/constante solo se puede ejecutar si guarda una función

console.log(is_precio());

//----------ventanas emergentes----------
//alert: mensajes en un ventana emergente que aparecen para el usuario
alert("Hola gamers!");

//prompt: también en un ventana emergente pero recibe un input de texto
const favorito= prompt("¿Cuál es tu videojuego favorito");

//confirm: recibe un input de confirmación (confirmar/cancelar) en el ventana emergente (devuelve true or false)
const ganas_jugar=confirm("¿Tienes ganas de jugar?");
if (ganas_jugar){
    console.log("A jugar!");
} else {
    console.log("A comer!");
}

//----------arreglos--------------
//En realidad son tablas de hash (pueden tener llaves) y pueden tener distintos tipos de datos (int, str, objetos, etc.) combinados.
//A pesar de ser declarado como constante, el usuario SÍ PUEDE modificar (añadir, cambiar, etc.) los elementos del arreglo y el tamaño del arreglo, pero NO la dirección
const videojuegos=["Minecraft"]; 
const jugadores= new Array();
videojuegos.push("Otro elemento");
videojuegos[10]="Uno más";
videojuegos["Nintendo"]="Mario Bros"; //arreglos asociativos
//formas de recorrerlos:
for(let i=0; i<videojuegos.length; i++){
    console.log(videojuegos[i]);
}
for(let juego in videojuegos){ //for in: recorre Indices o claves, for of: recorre los valores como tal
    console.log(juego);
}

//--------Objetos (variables que pueden guardar valores/atributos Y funciones/métodos, guardar colección datos definidos y entidades más complejas)-------------
const objeto={};
const videojuego={
    nombre:"Minecraft",
    genero:"Sandbox",
    plataforma: ["pc", "nintendo", "xbox"],
}

console.log(videojuego.nombre);