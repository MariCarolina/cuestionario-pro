  // Función para validar que un campo contiene solo letras
  function TestTexto(texto) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(texto);
}

// Función para validar que una fecha no es futura
function TestFecha(fecha) {
    const fechaNac = new Date(fecha);
    const fechaActual = new Date();
    return fechaNac <= fechaActual;
}

// Función para validar que un teléfono contiene solo números
function TestEntero(numero) {
    return /^\d+$/.test(numero);
}

function validarFormulario() {
    // Validación del nombre (TestTexto)
    const nombre = document.getElementById("nombre").value;
    if (!TestTexto(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false;
    }

    // Validación de la fecha de nacimiento (TestFecha)
    const fecha = document.getElementById("fecha").value;
    if (!TestFecha(fecha)) {
        alert("La fecha de nacimiento no puede ser futura.");
        return false;
    }

    // Validación del teléfono (TestEntero)
    const telefono = document.getElementById("telefono").value;
    if (!TestEntero(telefono) || telefono.length < 7 || telefono.length > 15) {
        alert("El teléfono debe contener solo números y tener entre 7 y 15 dígitos.");
        return false;
    }

    // Si todo es válido
    return true;
}