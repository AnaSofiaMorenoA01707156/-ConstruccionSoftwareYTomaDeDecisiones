//DISCLAIMER: Se pidió el uso de document.write en el primer inciso a pesar de estar depreciado.
//Ejercicio 1: Entrada: un número pedido con un prompt. 
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
document.write("<p>Problema 1: tabla de número, cuadrado y cubo hasta número ingresado en input.</p>");
const numeroDado = prompt("Dame un número: ");
const numeros= new Array(); const cuadrados= new Array(); const cubos= new Array();
for(let i=1; i<=numeroDado; i++){
    numeros.push(i);
    cuadrados.push(i**2);
    cubos.push(i**3);
}
let tabla = "<table>"
tabla += "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>"
for(let i=0; i<numeros.length; i++){
    tabla += "<tr><td>" + numeros[i] + "</td><td>" + cuadrados[i] + "</td><td>" + cubos[i] + "</td></tr>";
}
tabla += "</table>"
document.write("<p>Número ingresado: " + numeroDado + tabla + "</p>");
//Ejercicio 2: Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
// Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
document.write("<br><p>Problema 2: resultado correcto/incorrecto de suma de dos números aleatorios y tiempo de respuesta.</p>");
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const horaInicio = Date.now();
const resultado = prompt("Dame el resultado de la suma de los siguientes 2 números: " + num1 + " y " + num2);
const horaFin = Date.now();
document.write("<p>Números a sumar: " + num1 + " y " + num2 + "</p>");
document.write("<p>Respuesta ingresada: " + resultado + "</p>");
if(resultado==num1+num2){
    document.write("<p>Resultado correcto. Tiempo de respuesta: " + (horaFin-horaInicio)/1000 + " segundos.</p>");
} else{
    document.write("<p>Resultado incorrecto (Resultado correcto de suma= " + (num1+num2) + "). Tiempo de respuesta: " + (horaFin-horaInicio)/1000 + " segundos.</p>");
}

//Ejercicio 3: Función: contador. Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
const contador= (arreglo) => {
    let negativos=0; let ceros=0; let positivos = 0;
    for(let num of arreglo){
        if(num<0){
            negativos+=1;
        }else if(num>0){
            positivos+=1;
        }else{
            ceros+=1;
        }
    }
    return [negativos, positivos, ceros];
}
document.write("<br><p>Problema 3: función contadora de negativos, positivos y ceros en un arreglo de números.</p>");
document.write("<p>Caso de prueba 1: arreglo=[1,1,-2,0,0]: 1 número negativo, 2 positivos y 2 ceros.</p>");
const arr=[1,1,-2,0,0];
document.write("<p>contador([1,1,-2,0,0])= " + contador(arr) + ".</p>"); 
console.assert(JSON.stringify(contador(arr)) === JSON.stringify([1, 2, 2]), "Caso de prueba 1 fallido.");
document.write("<p>Caso de prueba 2: arreglo=[8,19,-22,10,-100, 2]: 2 números negativos, 4 positivos y 0 ceros.</p>");
const arr2=[8,19,-22,10,-100, 2];
document.write("<p>contador([8,19,-22,10,-100, 2])= " + contador(arr2) + ".</p>");
console.assert(JSON.stringify(contador(arr2)) === JSON.stringify([2, 4, 0]), "Caso de prueba 2 fallido.");
document.write("<p>Caso de prueba 2: arreglo=[0]: 0 números negativos, 0 positivos y 1 cero.</p>");
const arr3=[0];
document.write("<p>contador([0])= " + contador(arr3) + ".</p>");
console.assert(JSON.stringify(contador(arr3)) === JSON.stringify([0, 0, 1]), "Caso de prueba 3 fallido.");

//Ejercicio 4: Función: promedios. Parámetros: Un arreglo de arreglos de números. 
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
const promedios = (arrs) =>{
    const proms=new Array();
    for(let arr of arrs){
        let sum=0;
        for(let num of arr){
            sum+=num;
        }
        proms.push(Math.round(sum/arr.length));
    }
    return proms;
}
document.write("<br><p>Problema 4: función calculadora de promedios de arreglos de números.</p>");
document.write("<p>Caso de prueba 1: arreglos=[[1,1,3],[2,10],[0,0]]: promedios redondeados[2,6,0].</p>");
const arreglos=[[1,1,3],[2,10],[0,0]];
document.write("<p>promedios([1,1,3],[2,10],[0,0])= " + promedios(arreglos) + ".</p>"); 
console.assert(JSON.stringify(promedios(arreglos)) === JSON.stringify([2,6,0]), "Caso de prueba 1 fallido.");
document.write("<p>Caso de prueba 2: arreglos=[[111,1,3],[2,-10],[8]]: promedios redondeados[38,-4,8].</p>");
const arreglos2=[[111,1,3],[2,-10],[8]];
document.write("<p>promedios([111,1,3],[2,-10],[8])= " + promedios(arreglos2) + ".</p>"); 
console.assert(JSON.stringify(promedios(arreglos2)) === JSON.stringify([38,-4,8]), "Caso de prueba 2 fallido.");
document.write("<p>Caso de prueba 3: arreglos=[[1,2,3,31,4],[21,3,7,24]]: promedios redondeados[8,14].</p>");
const arreglos3=[[1,2,3,31,4],[21,3,7,24]];
document.write("<p>promedios([1,2,3,31,4],[21,3,7,24])= " + promedios(arreglos3) + ".</p>"); 
console.assert(JSON.stringify(promedios(arreglos3)) === JSON.stringify([8,14]), "Caso de prueba 3 fallido.");

//Ejercicio 5: Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.

const inverso = (num) =>{
    let cadenaNum=String(num);
    let inv="";
    for(let i=(cadenaNum.length-1); i>=0; i--){
        inv+=cadenaNum[i];
    }
    return Number(inv);
}
document.write("<br><p>Problema 5: función inversora de un número.</p>");
document.write("<p>Caso de prueba 1: número 1234: inverso=4321.</p>");
numInv=1234;
document.writeln("<p>inverso(1234)= " + inverso(numInv) + ".</p>");
console.assert(inverso(numInv) === 4321, "Caso de prueba 1 fallido.");
document.write("<p>Caso de prueba 2: número 88641: inverso=14688.</p>");
numInv2=88641;
document.writeln("<p>inverso(88641)= " + inverso(numInv2) + ".</p>");
console.assert(inverso(numInv2) === 14688, "Caso de prueba 2 fallido.");
document.write("<p>Caso de prueba 3: número 389442: inverso=244983.</p>");
numInv3=389442;
document.writeln("<p>inverso(389442)= " + inverso(numInv3) + ".</p>");
console.assert(inverso(numInv3) === 244983, "Caso de prueba 3 fallido.");
//Ejercicio 6: Solución para un problema de tu elección. Se pide la descripción en el documento HTML.
const mostrarProblema6 = () => {
    class cuentaAhorro {
        constructor(saldoI, int, meses) {
            this.saldoInicial = saldoI;
            this.interes = int;
            this.mesesTransc = meses;
        }
        calcularSaldo(){
            this.saldoFinal=this.saldoInicial+(this.interes*this.mesesTransc);
        }
        mostrarSaldo(){
            document.getElementById("sol6").innerHTML = "<p>----Resultado: El saldo actual o final en tu cuenta de ahorro de acuerdo a lo ingresado es de " + this.saldoFinal + ".<br></p>";
        }
    }
    const saldo=Number(prompt("Dime el saldo inicial de tu cuenta de ahorro: "));
    const montoInt=Number(prompt("Dime el monto de interés mensual de tu cuenta de ahorro: "));
    const mesTranscurridos=Number(prompt("Dime cuántos meses han transucrrido desde que empezaste tu cuenta de ahorro: "));
    cuenta1 = new cuentaAhorro(saldo, montoInt, mesTranscurridos);
    cuenta1.calcularSaldo(); cuenta1.mostrarSaldo();
}
window.onload = () => {
    const prob6 = document.getElementById("problema6");
    prob6.onclick = mostrarProblema6;
}