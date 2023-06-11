// Busca el boton que tenga el id="boton"
const boton = document.getElementById("boton-principal")

//El metodo addEventListener le agrega un evento al boton cuando se le da click    

boton.addEventListener("click", function () {
    alert("Primera manipulación del DOM!")
    console.log("Comprobando el funcionamiento")
})

const botonSecundario=document.getElementById("boton-secundario")

botonSecundario.addEventListener("click", function (){
    let nombre="Diana"
    alert("Desarrollado por " + nombre + " en el curso de Back End Básico")
})

// Obtener el boton que tiene el id parrafo-boton y guarlo en una constate
const botonparrafo = document.getElementById("boton-parrafo")

// Cuando se le de click va a seguir la funcion
 
botonparrafo.addEventListener("click", function(){
    // Se trae el elemento HTML que encuentre con la etiqueta p
    const parrafo = document.querySelector("p")
    // textContent cambia el contenido del texto del elemento parrafo
    parrafo.textContent = "Probando el boton cambiar parrafo"
})

botonParrafo.addEventListener("click", function(){
    // Se trae el elemento HTML que encuentre con la etiqueta p
    const parrafo = document.querySelectorAll("p")
    // textContent cambia el contenido del texto del elemento parrafo
    parrafo[1].textContent = "Probando el boton cambiar parrafo"

    const subtitulo = document.querySelectorAll("h2")
    console.log(subtitulo)

    subtitulo[3].textContent = "Subtitulo nuevo!"
})
