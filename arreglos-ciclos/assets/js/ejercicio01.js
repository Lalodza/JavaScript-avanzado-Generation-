/* 
    Crear un arreglo con 20 números. 
    Mostrar en HTML la suma de dichos 
    números y el promedio.
*/
let numeros = new Array();
let suma = 0;
let prom = 0;

for(let i = 0;i<20;i++){
    /* numeros[i] = Math.round(Math.random()*10); */
    numeros[i] = Math.floor(Math.random() * (25 - 1)) + 1;
}
/* 
let numeros2 = numeros.map(function(elemento){
    return elemento + elemento;
});
 */
numeros.forEach(elemento => {
    suma += elemento;
});
prom = ((suma)/numeros.length);

document.write('Numeros originales: <br>'+numeros+'<br><br>');
/* document.write('Numeros sumados entre si: <br>'+numeros2+'<br><br>'); */
document.write('Suma de los numeros: '+suma+'<br>');
document.write('Promedio: '+prom);