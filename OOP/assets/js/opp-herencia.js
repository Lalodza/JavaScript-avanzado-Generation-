class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //Metodos
    atacar(){
        return console.log(`${this.nombre} esta atacando`);
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad = edad;
    }

    //metodos
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando.`);
    }
}

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad);
        this.color = color;
    }
}

const Electrico1 = new Electrico('Panchito', 'Electrico', 4, 'Gris');
console.log(Electrico1);

const Pikachu1 = new Pikachu('Juan','Electrico',3);
console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon('Charmander', 'Fuego');
Pokemon1.atacar();