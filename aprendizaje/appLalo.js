//INTRODUCCIÓN AL USO DE NODE: permite tener acceso al sistema de archivos de la computadora, y ejecutar programas como servidores web.
//Code no es secuencial, el código se va a ejecutar de forma asíncrona: trabaja con "promesas" (no ejecuta en el momento, 
// pero se "compromete" a ejecutarlo después). Casi todas las promesas (ejecuciones) se cumplen
console.log("hola desde node"); //con nodejs console.log imprime en la terminal del lado del servidor

const filesystem= require('fs'); //importar el sistema de archivos del sistema (tipo una API para interactuar con él)
//filesystem.writeFileSync('hola.txt', 'Hola desde node'); //crea el archivo con el nombre (1 el.) y añade lo 2do a su contenido. 
// "Sync" hace que la instrucción sea síncrona (para que no se ejecute hasta que se cree el archivo).

const arreglo=[50, 6, 9, 10, 1, 2, 100, 12, 20, 34, 5];
for(let item of arreglo){
    setTimeout(() => {     //recibe dos funciones: una función y luego un valor de milisegundos (ejecuta la función después de esos milisegundos)
        console.log(item);
    }, item); //imprime el arreglo en orden ascendente porque se imprime conforme se cumpla el item en milisegundos
}

const http= require('http');
const server=http.createServer((request, response) => {
//    console.log(request);
    console.log(request.url);
//    console.log(response);
    response.setHeader('Content-Type', 'text/html');
    response.write("respuesta");
    response.end();
});

server.listen(3000);