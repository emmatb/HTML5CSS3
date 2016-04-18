var button = document.getElementById("form-button");
button.addEventListener("click", function(){
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
        return false;
    }

    if (email.checkValidity() == false) {
        alert("Escriba un email correcto");
        email.focus();
        return false;
    }

    if (ejercito.checkValidity() == false) {
        alert("El campo ejercito es incorrecto.");
        ejercito.focus();
        return false;
    }

    if (fecha.checkValidity() == false) {
        alert("El campo fecha es incorrecto");
        fecha.focus();
        return false;
    }

    if (misiones.mision1.checkValidity() == false) {
        alert("Selecciona el tipo de misión");
        return false;
    }
});