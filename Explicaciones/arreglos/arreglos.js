// Un arreglo es una colección de elementos (datos)
const lapices=["verde", "morado", "rojo", "amarillo", "azul", "blanco", "negro"]
console.log(lapices)
console.log(lapices[1])
console.log(lapices[3])

const variosDatos=[54, true, "A", "Hola Mundo!", false]
console.log(variosDatos)

const informacion=["Liliana", "Herrera", 65, 35415145, "llherrerap@mail.com"]
console.log(informacion)
console.log(informacion[4])

// Funciones
// La funcion push agrega un elemento al arreglo
lapices.push("rosado")
console.log(lapices)
// La funcion pop quita el ultimo elemento del arreglo
lapices.pop()
console.log(lapices)

const a=Array(100).fill(true)
console.log(a)

const numeros = [10, 5,8, 96, 12,54, 47, 63, 21, 45, 87, 96, 4]
// El metodo splice elimina elementos de acuerdo a la posicion 
numeros.splice(0,1)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])
console.log("El arreglo tiene: "+ numeros.length)

for (let i = 0; i < numeros.length; i++) {
    console.log("El numero "+ numeros[i] + " Esta en la posicion " + i)
}

informacion.forEach(dato => {
    console.log(dato)
});

numeros.forEach(numero => {
    console.log("Numero por foreach " + numero)
})

lapices.forEach(color => {
    console.log("El color es " + color)
})
