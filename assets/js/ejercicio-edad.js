
let edadUsuario = document.getElementById('edad')
let yearActual = document.getElementById('actual')

function getCalcularEdad() {
    let yearActual01 = parseInt(yearActual.value);
    let yearNac = parseInt(prompt('Ingresa tu fecha de nacimiento: '));
    edad = yearActual01 - yearNac;
    edadUsuario.textContent = 'La edad del usuario es: ' + edad;
}

