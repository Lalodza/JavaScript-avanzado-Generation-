let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito desde JavaScript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[0].textContent = 'Parrfos escritos desde JavaScript';

for(let i=0; i < parrafos.length; i++) {
    parrafos[i].textContent = 'Parrafo' + i
} */

let email =  document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}