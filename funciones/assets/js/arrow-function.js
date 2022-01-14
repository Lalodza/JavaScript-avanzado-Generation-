/* 
    ARROW FUNCTION
    Funcion de flecha
*/
/* 
function sumar(num1, num2) {
    //Operaciones o codigo a ejecutar
    return num1 + num2;
}
 */

const sumar = (num1, num2) => {
    return num1 + num2;
}

let num1 = parseInt(prompt('Ingresa el numero 1: '));
let num2 = parseInt(prompt('Ingresa el numero 2: '));
let suma = sumar(num1, num2);

document.write(`La suma de ${num1} y ${num2} es: ${suma}<br>`);
