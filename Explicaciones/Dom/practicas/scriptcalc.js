/// Obtener los elementos del formulario por medio del DOM

const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const operacion = document.getElementById("operacion")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

calcular.addEventListener("click", function (){
    const num1 = Number(valor1.value)
    const num2 = Number(valor2.value)
    const op = operacion.value
    let resp;
    switch (op) {
        case "+":
            resp=num1+num2
            break;
            case "-":
            resp=num1-num2
            break;
                case "*":
                resp=num1*num2
                break;
                     case "/":
                    resp=num1/num2
                    break;
                    default:
                        resp = "Operación no identificada"
            break;
    }
    resultado.textContent = resp
})

