document.addEventListener("DOMContentLoaded", function () {
    function validarFormulario() {
        let valorName = document.forms["myform"]["nombre"].value;
        let valorEmail = document.forms["myform"]["email"].value;
        let valorEdad = document.forms["myform"]["edad"].value;
        let valorMensaje = document.forms["myform"]["mensaje"].value;
        let result = document.getElementById("resultado");

        if (valorName === "" || valorEmail === "" || valorEdad === "" || valorMensaje === "") {
            result.innerHTML = "<p>Todos los campos son obligatorios.</p>";
            return false;
        }

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!valorEmail.match(emailPattern)) {
            result.innerHTML = "<p>El email no es válido, asegúrese de escribirlo correctamente.</p>";
            return false;
        }

        result.innerHTML = "<p>¡Formulario Enviado Correctamente!!!</p>"
        return false;        
    }

    document.forms["myform"].onsubmit = validarFormulario;
});