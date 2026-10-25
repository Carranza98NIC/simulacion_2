/* ==========================================
   LÓGICA DE NAVEGACIÓN (SIMULACIÓN SPA)
========================================== */

function mostrarSeccion(idSeccion) {
    // 1. Capturamos todos los elementos HTML que tienen la clase "modulo" (todas las pantallas)
    const secciones = document.querySelectorAll('.modulo');

    // 2. Usamos un ciclo (forEach) para recorrerlas y quitarles la clase "activo"
    // Esto asegura que la pantalla actual se oculte antes de mostrar la nueva
    secciones.forEach(function(seccion) {
        seccion.classList.remove('activo');
    });

    // 3. Buscamos exactamente el módulo al que el usuario quiere ir usando su ID
    const seccionSeleccionada = document.getElementById(idSeccion);

    // 4. Si el módulo existe, le agregamos la clase "activo" para que el CSS lo muestre
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add('activo');
    }
}