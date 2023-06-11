//objeto llanta
const llanta = {
    //propiedades de una llanta
    //Las propiedades son las caracteristicas de un objeto
    marca:"Micheline",
    tamano: 35.5,
    modelo: "Pilot Street 2"

}
//objetos
const persona ={
    //propiedades del objeto persona
    nombre: "Mary",
    rasgos: ["rubio", "alto", "delgado"],
    altura: 1.75,
    edad: 45,
    genero: "Femenino",
    nacionalidad: "colombiana"
}
//arreglo
const arreglo =["hola", 15, true]

const mascota = {
    nombre: "pericles",
    color: "blanco",
    tipo: "ave",
    raza: "cacatua",
    pasatiempos: ["cantar", "volar", "nadar","dormir" ],
    contacto: {
        nombre:"Diana",
        telefono: 34566,
        correo: "diana@gmail.com"
    }
}
console.log("el nombre de la mascota es:"+mascota.nombre)
console.log("la mascota de diana es:"+mascota.tipo)

const maru = {
    nombre: "Mary",
    apellido: "Garcia",
    edad: 42,
    pasatiempos: ["Pasear con mi hijo","bailar", "ir al cine", "ir al gym", "estudiar", ],
    soltera: true,
    contacto: {
        telefono: 31534447,
        correo: "maru@gmail.com"
    },
    saludar: function(){
        return "hola, soy Maru"
    }

    // For in nos permite recorrer un objeto con sus propiedades

for (const propiedad in llanta) {
    console.log("Propiedad: " + propiedad + " Valor: " + llanta[propiedad])
}
    
}