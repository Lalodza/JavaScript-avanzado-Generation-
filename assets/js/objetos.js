let miObjeto = {
    // pares de clave valor
    /* clave: 'valor' */
    nombre: 'Eduardo Diaz'
}

let nombre = 'Eduardo Diaz';
let edad = 23;
let direccion = 'Tlalnepantla de Baz, edo Mex';
let numero = 14342313;

console.log(nombre);

let persona = {
    nombre: {
        apellidoPaterno: 'Diaz',
        apellidoMaterno: 'Anaya',
        nombre: 'Eduardo'
    },
    edad: 23,
    direccion: {
        ciudad: 'Tlalnepantla de Baz',
        estado: 'Edo. México',
        pais: 'México'
    } ,
    numero: [
        25143214,
        24325254,
    ]
};

console.log(persona.nombre);
console.log(persona.direccion.pais);
console.log(persona.numero[1])

let tennis = {
    color: [
        'azul',
        'verde',
        'blanco',
        'rojo',
        'negro'
    ],
    tipo: [
        'chancla',
        'futbol',
        'soccer',
        'correr',
        'basquetball',
        'casual'
    ],
    genero: [
        'hombre',
        'mujer',
        'niño',
        'niña',
        'unisex'
    ],
    talla: {
        hombre: [
            24,24.5,25,25.5,26,26.5,27,27.5,28,29
        ],
        mujer: [
            19,19.5,20,20.5,21,21.5,22,22.5,23,23.5
        ],
        niño: [
            11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17
        ],
        niña: [
            11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17
        ]
    }
};

console.log(tennis);