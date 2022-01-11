let nombre = document.getElementById('name');

function getChangeName() {
    var newName = prompt('Coloque su nombre:');

    nombre.textContent = 'Hola ' + newName
}