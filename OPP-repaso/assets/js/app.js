
class Animalito{
    constructor(nombre,edad,especie,revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }   
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;

        let mensaje = 'Paciente agregado <br>';
        return document.write(mensaje);
    }

    modificarPaciente(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPaciente();
            document.write('Paciente revisado ✅🐶');
        }else{
            document.write('Este paciente ya fue revisado');
        }
    }

    mostrarLista(){
        for(let i = 0;i<this.listaPacientes.length;i++){
            document.write(' ' + this.listaPacientes[i].nombre)
        }
        document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br> 
        Pacientes revisados: ${this.pacientesRevisados}<br>`);

    }

}

/* const Animalito1 = new Animalito('Manchas',5,'Perro'); */
/* console.log(Animalito1); */

const VeterinariaPanchito = new Veterinario();

//Objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas',5,'Perro',false);//objeto 1
const Animalito2 = new Animalito('Galleta',5,'Gato',true);//objeto 2
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();

VeterinariaPanchito.revisarPaciente(Animalito2);