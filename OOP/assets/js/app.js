/* 
    Clases, molde que nos permite crear objetos
    la 1era letra debe de estar en mayuscula
*/

class Animal{
    /* #nombre;
    #especie; */
    //constructor de un animal
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }
    /* 
        GET y SET
        solo tienen este proposito leer o modificar atributos
    */
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie;
    }

    //metodos == function
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es: ${this.nombre} y soy un ${this.especie} <br>`;
        return mensaje;
    }

    //metodos estaticos
    //Pertenece solo a la clase y no se hereda a los objetos
    static saludar(){
        return console.log('Hola soy un metodo estatico');
    }

}

Animal.saludar();

const Animal1 = new Animal('Scooby', 'Perro');
console.log(Animal1);

const Animal2 = new Animal('Pecas', 'Gato');
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);


Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = 'Scrappy';
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre('Oddie'));

//GETTERS Y SETTERS
//get = OBTENER el valor de un atributo
//set = FIJAR o cambiar el valor de un atributo

console.log(Animal1.getNombre);
Animal1.setNombre = 'Manchas';
console.log(Animal1.getNombre);
