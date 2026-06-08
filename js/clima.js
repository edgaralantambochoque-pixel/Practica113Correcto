async function obtenerClima(){
    // Captura el valor y limpia espacios al inicio/final
    var ciudad = document.getElementById("ciudad").value.trim();
    var apiKey = "85056f8554204fd898a7982c3c083c69";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
    
    // Validación básica antes de consumir el API
    if (ciudad === "") {
        document.getElementById("resultado").innerHTML = "Por favor, escribe el nombre de una ciudad.";
        return;
    }

    try{
        var respuesta = await fetch(url);
        if(!respuesta.ok){
            throw new Error("Ciudad no encontrada");
        }
        var datos = await respuesta.json();
        // Inyecta el resultado dinámicamente en tu contenedor
        document.getElementById("resultado").innerHTML = `El clima en ${ciudad} es con una temperatura de ${datos.main.temp}°C.`;
    }
    catch(error){
        document.getElementById("resultado").innerHTML = "Error al obtener el clima: " + error.message;
    }
}