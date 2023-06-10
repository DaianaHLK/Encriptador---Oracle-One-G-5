const textarea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnencriptar(){
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(scriptencriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    scriptencriptado = scriptencriptado.toLowerCase()
    for(let i = 0; i < matrizcodigo.length; i++){
        if(scriptencriptado.includes(matrizcodigo[i][0])){
            scriptencriptado = scriptencriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }
    return scriptencriptado
}

function btndesencriptar(){
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
}

function desencriptar(stringdesencriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    stringdesencriptado = stringdesencriptado.toLowerCase()
    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringdesencriptado.includes(matrizcodigo[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringdesencriptado
}

