function validar() {
    // Reiniciar mensajes de error y estilos
    document.getElementById('errores').innerHTML = '';
    document.querySelectorAll('input:invalid').forEach(input => {
        input.style.border = '1px solid #ccc';
    });
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const temperatura = document.getElementById('temperatura').value;
    const telefono = document.getElementById('telefono').value;
    // Validar nombre (obligatorio)
    if (nombre.length === 0) {
        mostrarError('El nombre es obligatorio.');
        document.getElementById('nombre').style.border = '2px solid red';
    }
    // Validar temperatura (obligatoria y en rango)
    if (temperatura === '') {
        mostrarError('La temperatura es obligatoria.');
        document.getElementById('temperatura').style.border = '2px solid red';
    } else if (temperatura < -10 || temperatura > 60) {
        mostrarError('La temperatura debe estar entre -10 y 60 grados.');
        document.getElementById('temperatura').style.border = '2px solid red';
    }
    // Validar teléfono (opcional)
    if (telefono.length > 0 && !/^[1-9][0-9]{9}$/.test(telefono)) {
        mostrarError('El teléfono debe tener 10 dígitos válidos.');
        document.getElementById('telefono').style.border = '2px solid red';
    }
    // Si hay errores, no enviar el formulario
    if (document.getElementById('errores').innerHTML !== '') {
        return false;
    }
    // Enviar el formulario
    if (telefono.length > 0) {
        agregarMensaje(`Hola ${nombre}, te llamaremos al ${telefono} cuando hagan ${temperatura} grados.`);
    } else {
        agregarMensaje(`Hola ${nombre}, nos vemos cuando hagan ${temperatura} grados.`);
    }
    // Limpiar campos
    document.getElementById('nombre').value = '';
    document.getElementById('temperatura').value = '';
    document.getElementById('telefono').value = '';

    return false;
}
function mostrarError(mensaje) {
    const erroresDiv = document.getElementById('errores');
    const errorP = document.createElement('p');
    errorP.textContent = mensaje;
    erroresDiv.appendChild(errorP);
}
function agregarMensaje(mensaje) {
    const mensajesUl = document.getElementById('mensajes');
    const mensajeLi = document.createElement('li');
    mensajeLi.textContent = mensaje;
    mensajesUl.appendChild(mensajeLi);
}