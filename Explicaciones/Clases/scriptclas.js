// Clases en JavaScript

// Definicion de la clase Animal
class Animal{
    // El constructor es el metodo que se ejcuta una vez se instancia (llamar) la clase
    constructor(nombre, genero){
        this.nombre=nombre
        this.genero=genero
    }
    // Metodo es una funcion que se puede llamar desde el objeto
    saludar(){
        return "Hola! Mi nombre es " + this.nombre
    }
}

//perro hereda las propiedades de la clase animal
class perro extends Animal{
    constructor(nombre, genero,raza){
        //super es un metodo que llama al constructor de la clase padre
        super(nombre, genero)
        this.raza = raza
    }
}
// objetos de la clase animal
const tara = new Animal("Tara", "Hembra")
console.log(tara.genero)
const lulu = new Animal("Lulu", "Hembra")
console.log(lulu.saludar())

//objetos de la clase perro
const cali = new perro ("Caliman", "macho", "criollo")
console.log(cali)

class Persona{
    constructor(nombre, apellido, edad, genero){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.genero=genero
    }
}

const lili = new Persona("Liliana", "Herrera",31,"Femenino")
const kiumy = new Persona("Kiumy", "Barrantes", 20, "Femenino")

console.log(lili.apellido)
console.log(kiumy.edad)