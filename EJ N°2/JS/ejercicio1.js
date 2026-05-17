function validarTexto(id, errorId) {
  var campo = document.getElementById(id);
  var error = document.getElementById(errorId);

  if (campo.value.trim() === "") {
    campo.classList.add("Denegad");
    campo.classList.remove("Acepado");
    error.style.display = "block";
    return false;
  }

  campo.classList.remove("Denegado");
  campo.classList.add("Acepado");
  error.style.display = "none";
  return true;
}

function validarSelect(id, errorId) {
  var campo = document.getElementById(id);
  var error = document.getElementById(errorId);

  if (campo.value === "") {
    campo.classList.add("Denegado");
    campo.classList.remove("Acepado");
    error.style.display = "block";
    return false;
  }

  campo.classList.remove("Denegado");
  campo.classList.add("Acepado");
  error.style.display = "none";
  return true;
}


function validarServicios() {
  var desayuno = document.getElementById("desayuno").checked;
  var spa = document.getElementById("spa").checked;
  var picina = document.getElementById("picina").checked;
  var error = document.getElementById("err-checks");

  if (!desayuno && !spa && !picina) {
    error.style.display = "block";
    return false;
  }

  error.style.display = "none";
  return true;
}

function validarFormulario() {
  var validarNombre = validarTexto("nombre", "err-nombre");
  var validarApellido = validarTexto("apellido", "err-apellido");
  var validarHabitacion = validarSelect("habitacion", "err-habitacion");
  var validarChecks    = validarServicios();

  if (!validarNombre || !validarApellido || !validarHabitacion || !validarChecks) {
    window.alert("Por favor complete todos los campos antes de continuar.");
    return;
  }

  var nombre   = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var selHab   = document.getElementById("habitacion");
  var habitacion = selHab.options[selHab.selectedIndex].text;

  var servicios = [];
  if (document.getElementById("desayuno").checked) servicios.push("Desayuno");
  if (document.getElementById("spa").checked) servicios.push("Spa");
  if (document.getElementById("picina").checked) servicios.push("Picina");


  var mensaje = "¿Confirmar reserva?\n\n" +
    "Huésped: " + nombre + " " + apellido + "\n" +
    "Habitación: " + habitacion + "\n" +
    "Servicios: " + servicios.join(", ");

  if (window.confirm(mensaje)) {
    document.getElementById("modal-body").innerHTML =
      "<p><b>Huésped:</b> " + nombre + " " + apellido + "</p>" +
      "<p><b>Habitación:</b> " + habitacion + "</p>" +
      "<p><b>Servicios:</b> " + servicios.join(", ") + "</p>";

    document.getElementById("modal").classList.add("show");
  }
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("show");
}