const textArea = document.querySelector(".espacioDeTexto");
const mensaje = document.querySelector (".espacioDeTexto_imagen");


    
// function cambiarTexto () {
//     var parrafo = document.getElementById(".noHayMensaje");
//     parrafo.innerText="Texto Encriptado"; 
// }

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    
    mensaje.value=textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
    // cambiarTexto ();
    
   


}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value=textoDesencriptado;
    textArea.value="";
    mensaje.style.backgroundImage= "inherit";

}

function btnCopiar() {
    const textoCopiado=mensaje.value;
    textArea.value=textoCopiado;
    mensaje.value="";
    

 }


function encriptar(stringEncriptado) {
    let matrizCodigo  = [["e","enter"], ["i","imes"] , ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }  
    }
    return stringEncriptado;
}
    
function desencriptar (stringDesencriptado) {
    let matrizCodigo  = [["e","enter"], ["i","imes"] , ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i< matrizCodigo.length ; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }  
    }
    return stringDesencriptado;

 }

