/* let $titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde JS'; */

let $titulo = document.querySelector('#titulo');
$titulo.textContent = 'Titulo escrito desde JS'

let $parrafos = document.querySelectorAll('p');
/* console.log($parrafos[1].textContent); */

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';
// document 
// append (inserccion al ultimo de cada hijo, en este 
// caso al final de 'body)
/* document.body.insertAdjacentElement('beforebegin',subtitulo); */
$titulo.insertAdjacentElement('afterend',subtitulo);


let $contenido = document.querySelector('#contenido');
console.log($contenido.textContent = '<br>');
// textContent nos devuelve unicamente texto, no permite colocar etiquetas html
console.log($contenido.innerHTML = '<br>');
// innerHTML nos devuelve el contenido con las etiquetas

console.log($contenido.outerHTML = 'hola');
/* 
    inerHTML modifica lo que esta adentro de lo que selecciones
    outerHTML moodifica todo incluyendo xejem el div contenedor
*/

let $contenido2 = document.querySelector('#contenido2');

let contenidoParrafo = document.createElement('span');
contenidoParrafo.textContent = 'Nuevo contenido de mi parrafo';
$contenido2.appendChild(contenidoParrafo);
