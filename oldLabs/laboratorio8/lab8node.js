//Problema/script 1: Función que recibe un arreglo de números y devuelve su promedio.
const promedio = (arr) =>{
    let sum=0;
    for(let num of arr){
        sum+=num;
    }
    const prom = Math.round(sum/arr.length);
    return prom;
}
const arreglo= [2,5,7,5,4,1];
console.log("El promedio del arreglo ", arreglo, " es ", promedio(arreglo));

//Problema/script 2: Función que recibe un string y escribe el string en un archivo de texto.
const filesystem= require('fs');
const escribir = (msg) => {
    filesystem.writeFileSync('writtenString.txt', msg);
}
const mensaje="Este es el string que debe escribirse en un nuevo archivo de texto.";
escribir(mensaje);
console.log("El string recibido ahora está escrito en un nuevo documento de texto en los archivos del sistema: writtenString.txt.")

//Problema/script 3: Problema ya implementado en otro lenguaje de programación: solución en js que se ejecute sobre node. Problema elegido: dado un número n, obtener la suma de todos los números múltiplos de 3 y de 5 desde el 1 hasta n.
const sumaEspecifica= (n) => {
    let suma=0;
    for(i=1; i<=n; i++){
        if(i%3==0 || i%5==0){
            suma+=i;
        }
    }
    return suma;
}
const num= 17;
console.log("La suma de múltiplos de 3 y de 5 de 1 hasta el número ", num, " es igual a ", sumaEspecifica(num));

//crear un servidor web que se ejecute sobre node, reciba peticiones de un cliente, y le responda.
const http1= require('http');
const server1= http1.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.write("Esta es una respuesta a la petición del cliente por parte del servidor.");
    response.end();
});
server1.listen(3000);

//Aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.
const http2= require('http');
const pagina= filesystem.readFileSync('htmlExample.html');
const server2= http2.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write(pagina);
    response.end();
});
server2.listen(800);