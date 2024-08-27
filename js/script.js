const textArea = document.querySelector(".encriptador__contenido__texto");
const mensaje = document.querySelector(".encriptador__resultado__mensaje");

function btnEncriptar() {
    if (validarTextarea() == true) {
        const textoEncriptado = encriptar(textArea.value);

        mensaje.value = textoEncriptado;
        textArea.value = '';
        mensaje.style.backgroundImage = 'none';

    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);

    mensaje.value = textoEncriptado;
    textArea.value = '';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptada;
}

function validarMinusculasSinAcentos(texto) {
    // Expresión regular para permitir solo letras minúsculas sin acentos
    let regex = /^[a-z]+$/;
    return regex.test(texto);
}

function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}



function validarTextarea() {
    const textarea = document.querySelector('.encriptador__contenido__texto');
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios

    if (!regex.test(textarea.value)) {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
        return false;
    }
    return true;
}

async function copiarTexto() {
    let textarea = document.querySelector(".encriptador__resultado__mensaje");
    await navigator.clipboard.writeText(textarea.value);
}
