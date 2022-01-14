let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];
/* Funcion normal */
document.write('forEach con funcion() normal <br>');

numeros.forEach(function (elemento, indice){
    document.write(elemento + ' - [' + indice + '] <br>');
});

/* Funcion flecha */
document.write('forEach con funcion => flecha <br>');

numeros.forEach(elemento => {
    document.write(elemento + ', ');
});

document.write('<br> <br> **** Multiplicado x 2 con map ***** <br>');
let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
});

document.write('<br>'+numeros2);


/* 
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');
 */


let caja1 = ['mango', 'uva', 'piña'];
let caja2 = caja1.map(function(elemento){
    return elemento;
});

document.write('<br>' + caja1 + '<br>');
document.write('<br>' + caja2 + '<br>');

caja2.push('pera');
document.write('<br>' + caja1 + '<br>');
document.write('<br>' + caja2 + '<br>');

document.write('<br>'+'<br>'+'<br>');

/* **************** INCLUDE ******************* */
document.write(' * INCLUDE * <br>');
document.write('<br>'+numeros.includes(328)+'<br>');

document.write('<br> <br> * MAP * <br>');
let numPares = numeros.filter((elemento) => {
    /* 
    if(elemento % 2 == 0){
        return true;
    } else{
        return false;
    }
    */
   if(elemento > 10 ) {
       return true;
   }
});

document.write('<br>'+numPares+'<br>');
document.write('<br>'+'<br>'+'<br>');

document.write(' * FILTER * <br>');
let frutas = ['Mango', 'Uva', 'Piña', 'Mandarina', 'Manzana', 'Aguacate'];

let frutasFiltro = frutas.filter((fruta) => {
    /* 
    if(fruta.includes('m') == true) {
        return true;
    }
 */
    /* return fruta.includes('m'); */
    return fruta.toLowerCase().includes('m');
});

document.write('<br>'+frutasFiltro+'<br>');

document.write('<br>'+'<br>'+'<br>');

/* **************** SORT(modifica el arreglo)  ******************* */
document.write(' * SORT * <br>');
let otrosNumeros = [9,2,3,5,1,4,8,6,7];


document.write('<br>' + otrosNumeros.sort() + '<br>');
document.write('<br>'+'<br>'+'<br>');

/* **************** REVERSE(modifica el arreglo) ******************* */
document.write(' * REVERSE * <br>');
document.write('<br>' + numeros.reverse() + '<br>');

document.write('<br>'+'<br>'+'<br>');

/* **************** FIND ******************* */
document.write(' * FIND * <br>');

let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLocaleLowerCase().includes('ma');
});

document.write('<br>' + frutaEncontrada + '<br>');