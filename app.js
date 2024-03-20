const campo_texto = document.querySelector("#inputTexto");
const campo_mensaje = document.querySelector("#outputTexto");
const mensaje_encriptado = document.querySelector("#ocultar")


console.log(campo_texto, campo_mensaje);
mensaje_encriptado.style.opacity = '100%'; // Esto es para asignarle una opacidad de 0

const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufai"], //indice 4
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    //console.log(texto);
    campo_mensaje.value = texto;
    //mensaje_encriptado.style.opacity = '0%'; // Y esto al presionar el botón, puede ser dentro de una función, hace que se vea la etiqueta
    mensaje_encriptado.style.display = 'none';
}

function encriptar(fraseEncriptada){
    for(let i=0; i<matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    //console.log(texto);
    campo_mensaje.value = texto;
    mensajeCopiado.style.opacity = '0%'; // Y esto al presionar el botón, puede ser dentro de una función, hace que se vea la etiqueta
}

function desencriptar(fraseDesencriptada){
    for(i=0; i<matriz_code.length; i++) {
        if(fraseDesencriptada.includes(matriz_code[i][1])) {
            fraseDesencriptada =  fraseDesencriptada.replaceAll(
                matriz_code[i][1], 
                matriz_code[i][0]
            );
        }
    }
    return fraseDesencriptada;
}

function btnCopiar(){
let texto = document.getElementById('.textoEncriptado').innerHTML;
  const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
}