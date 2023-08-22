  // Función para obtener el valor almacenado en localStorage o el valor por defecto
  function getInitialCount() {
    var storedCount = localStorage.getItem('contador_visitas');
    if (storedCount !== null) {
        return parseInt(storedCount);
    } else {
        return 1000; // Valor por defecto si no hay nada almacenado
    }
}

// Función para incrementar el contador y mostrarlo en la página
function incrementCounter() {
    var contadorElemento = document.getElementById('contador');
    var contadorActual = getInitialCount();
    contadorActual++;
    localStorage.setItem('contador_visitas', contadorActual);
    contadorElemento.textContent = contadorActual;
}

// Incrementar el contador y mostrarlo al cargar la página
var contadorElemento = document.getElementById('contador');
var contadorActual = getInitialCount();
contadorActual++;
localStorage.setItem('contador_visitas', contadorActual);
contadorElemento.textContent = contadorActual;
