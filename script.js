const textoArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textoArea.value);
    mensaje.value = textoEncriptado;
    textoArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textoArea.value);
    mensaje.value = textoDesencriptado;
    textoArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
}

function btnPegar(){
    navigator.clipboard.readText()
    .then(textoPegado => {
        textoArea.value = textoPegado;
    })
    .catch(error => {
        console.log("Hubo un error: ", error);
    });
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

textoArea.addEventListener('input', function () {
    let texto = textoArea.value;
    texto = texto.replace(/[^a-z\s]/g, '');
    textoArea.value = texto;
});