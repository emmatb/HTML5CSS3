var form = document.getElementById("contact-form");
form.addEventListener("submit", function(event){
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var misiones = {
        "mision1": document.getElementById("tipo_mision_1"),
        "mision2": document.getElementById("tipo_mision_2"),
        "mision3": document.getElementById("tipo_mision_3"),
        "mision4": document.getElementById("tipo_mision_4")
    };
    var ejercito = document.getElementById("ejercito");
    var fecha = document.getElementById("fecha");
    
    // Validaciones con formularios html5 con propiedades
    // de validacion (required, minlength)
    if (nombre.checkValidity() == false) {
        alert("Escriba un nombre");
        nombre.focus();
        event.preventDefault();
        return false;
    }

    if (email.checkValidity() == false) {
        alert("Escriba un email correcto");
        email.focus();
        event.preventDefault();
        return false;
    }

    if (ejercito.checkValidity() == false) {
        alert("El campo ejercito es incorrecto.");
        ejercito.focus();
        event.preventDefault();
        return false;
    }

    if (fecha.checkValidity() == false) {
        alert("El campo fecha es incorrecto");
        fecha.focus();
        event.preventDefault();
        return false;
    }

    if (misiones.mision1.checkValidity() == false) {
        alert("Selecciona el tipo de misión");
        event.preventDefault();
        return false;
    }
});