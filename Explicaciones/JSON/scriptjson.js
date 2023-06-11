//Una API es un intermediario entre dos programas para que puedan comunicarse e intercambiar información

//En esta parte se realiza la soicitud a la pagina jsonplaceholder 
fetch("https://jsonplaceholder.typicode.com.users")
//cuando se recibe una respuesta esta se pasa a un JSON utilizando un metodo json()
.then(response => response.json())
.then(data => console.log(data))
//si ocurre algun error muestralo en consola
.catch(error => console.error(error))