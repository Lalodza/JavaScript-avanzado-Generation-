let cadena1 = 'Hola';
console.log(cadena1);

let cadena2 = new String('Adios');
console.log(cadena2);

/* let arreglo = new Array(); */
console.log(cadena2.toLocaleLowerCase().includes('a'));

console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toUpperCase());

console.log(cadena1.toLocaleLowerCase());

/* ===================================== */

let palabra = "Hola Mundo";
let arreglo = palabra.split("");
word = document.getElementById('palabra');
console.log(arreglo);

console.log(arreglo.reverse().join(""));

function invervetirPalabra(cadena) {
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join();
    return console.log(cadenaInvertida);
}

invervetirPalabra("Generation");

