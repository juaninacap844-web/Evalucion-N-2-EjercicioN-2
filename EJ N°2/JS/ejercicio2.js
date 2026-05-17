function verificarFechas() {
  var inputInicio = document.getElementById("fechaInicio");
  var inputCierre = document.getElementById("fechaCierre");
  var errorInicio = document.getElementById("error-inicio");
  var errorCierre = document.getElementById("error-cierre");

  inputInicio.classList.remove("denegado", "aceptado");
  inputCierre.classList.remove("denegado", "aceptado");
  errorInicio.style.display = "none";
  errorCierre.style.display = "none";

  var hayError = false;

  if (inputInicio.value === "") {
    inputInicio.classList.add("denegado");
    errorInicio.style.display = "block";
    hayError = true;
  }

  if (inputCierre.value === "") {
    inputCierre.classList.add("denegado");
    errorCierre.style.display = "block";
    hayError = true;
  }

  if (hayError) {
    window.alert("Debe ingresar ambas fechas.");
    return;
  }

  var fechaInicio = new Date(inputInicio.value);
  var fechaCierre = new Date(inputCierre.value);

  if (fechaInicio >= fechaCierre) {
    inputInicio.classList.add("denegado");
    inputCierre.classList.add("denagado");
    window.alert("Error: La fecha de inicio debe ser anterior a la fecha de cierre.");
    return;
  }

  inputInicio.classList.add("aceptado");
  inputCierre.classList.add("aceptado");

  var dias = calcularNoches(fechaInicio, fechaCierre);

  document.getElementById("modal-body").innerHTML =
    "<p><b>Fecha de inicio:</b> "  + formatearFecha(inputInicio.value) + "</p>" +
    "<p><b>Fecha de cierre:</b> " + formatearFecha(inputCierre.value) + "</p>" +
    "<p><b>Dias en total:</b> "    + dias + "</p>";

  document.getElementById("modal").classList.add("show");
}

function calcularNoches(inicio, fin) {
  var diff = fin - inicio;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}


function formatearFecha(str) {
  var partes = str.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}


function cerrarModal() {
  document.getElementById("modal").classList.remove("show");
}