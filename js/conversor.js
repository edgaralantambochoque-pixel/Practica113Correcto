// Función principal que se ejecuta automáticamente al escribir en el input
function convertirBases() {
    // 1. Capturamos el valor que escribe el usuario
    let inputDecimal = document.getElementById("numeroDecimal").value;
    
    // 2. Referenciamos las cajas del HTML donde mostraremos los resultados
    let resBinario = document.getElementById("resBinario");
    let resOctal = document.getElementById("resOctal");
    let resHex = document.getElementById("resHex");

    // 3. Si el campo está vacío, reseteamos las pantallas a 0 y salimos de la función
    if (inputDecimal === "") {
        resBinario.innerText = "0";
        resOctal.innerText = "0";
        resHex.innerText = "0";
        return;
    }

    // 4. Convertimos el texto ingresado a un número entero
    let numero = parseInt(inputDecimal);

    // 5. Validamos que sea un número válido y hacemos las conversiones nativas
    if (!isNaN(numero)) {
        // El método .toString(base) convierte el número a la base matemática indicada
        resBinario.innerText = numero.toString(2);
        resOctal.innerText = numero.toString(8);
        resHex.innerText = numero.toString(16).toUpperCase(); // Pone letras (A-F) en mayúsculas
    }
}