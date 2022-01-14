/* 
    FUNCION
    Es un bloque de codigo reutilizable
    puede tener o no parametros de entrada
    puede devolver o no un valor
*/

function sumar(num1, num2) {
    //Operaciones o codigo a ejecutar
    return num1 + num2;
    console.log('Hola desde la funcion');
}

function restar(num1, num2) {
    document.write(`La resta de ${num1} y ${num2} es ${num1 - num2} <br>`);
}


let num1 = parseInt(prompt('Ingresa el numero 1: '));
let num2 = parseInt(prompt('Ingresa el numero 2: '));
let suma = sumar(num1, num2);


//template string
document.write(`La suma de ${num1} y ${num2} es: ${suma}<br>`);
restar(num1, num2);
document.write('La suma de '+num1+' y '+num2+' es: '+suma);