/* 
Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado

*/

const evaluarDes = (descuento, precio) => {
    return newPrecio = precio * (1 - ((descuento)/100));
}

precio = parseInt(prompt('Ingresa el Precio: '));
cuponDescuento = prompt('Ingresa el Cupon: ');
let descuento;

switch (cuponDescuento) {
    case 'Bronce':
        descuento = 5;
        alert('El precio es: '+precio+' el precio final es: '+evaluarDes(descuento, precio));
        break;
    case 'Plata':
        descuento = 10;
        alert('El precio es: '+precio+' el precio final es: '+evaluarDes(descuento, precio));
        break;
    case 'Oro':
        descuento = 20;
        alert('El precio es: '+precio+' el precio final es: '+evaluarDes(descuento, precio));
        break;
    case 'Platino':
        descuento = 25;
        alert('El precio es: '+precio+' el precio final es: '+evaluarDes(descuento, precio));
        break;
    default:
        console.log('Cupon erroneo')
        break;
}
