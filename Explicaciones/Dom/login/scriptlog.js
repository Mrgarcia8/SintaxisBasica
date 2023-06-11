const valor1 = document.getElementById("username")
const valor2 = document.getElementById("password")


calcular.addEventListener("click", function (){
    const Usuario = Usuario(valor1.value)
    const contra = Contrasena(valor2.value)
    const op = operacion.value
    let resp;
    switch (op) {
        case "Ingrese usuario":
            resp=user
            break;
            case "ingrese contraseña":
            resp=1234
            break;
                default:
                        resp = "Usuario incorrecto"
            break;
    }
    resultado.textContent = resp
})