// Realiza la solicitud para obtener el archivo tienda.json
fetch("tienda.json")
.then(info => info.json())
.then(data => {
    console.log(data)
})