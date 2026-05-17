var habitaciones = {
  estandar: {
    nombre: "Habitación Estándar",
    desc: "Cama matrimonial, baño privado y TV",
    imagen: "IMG/estandar.png",
    fondoCarta: '#ffffff',
    colorTitulo: '#000000',
    colorDesc: '#000000'
  },
  deluxe: {
    nombre: "Habitación Deluxe",
    desc: "Cama grande, minibar y vista a la ciudad",
    imagen: "IMG/deluxe.jpg",
    fondoCarta: '#ffffff',
    colorTitulo: '#000000',
    colorDesc: '#000000'
  },
  suite: {
    nombre: "Suite",
    desc: "Sala de estar, jacuzzi privado y servicio 24 horas",
    imagen: "IMG/suite.png",
    fondoCarta: '#ffffff',
    colorTitulo: '#000000',
    colorDesc: '#000000'
  }
};

var habitacionActivo = null;

// Cambia la imagen, color de carta, color de título
function cambiarHabitacion(tipo, btn) {
  var hab = habitaciones[tipo];

  document.getElementById("roomImg").src = hab.imagen;
  document.getElementById("roomImg").alt = hab.nombre;

  document.getElementById("roomInfo").style.background = hab.fondoCarta;


  document.getElementById("roomNombre").style.color = hab.colorTitulo;
  document.getElementById("roomNombre").textContent  = hab.nombre;


  document.getElementById("roomDesc").style.color = hab.colorDesc;
  document.getElementById("roomDesc").textContent = hab.desc;


  document.getElementById("colorCarta").value  = hab.fondoCarta;
  document.getElementById("colorTitulo").value = hab.colorTitulo;
  document.getElementById("colorDesc").value   = hab.colorDesc;


  if (habitacionActivo) habitacionActivo.classList.remove("activo");
  btn.classList.add("activo");
  habitacionActivo = btn;
}


function cambiarFondoCarta(color) {
  document.getElementById("roomInfo").style.background = color;
}


function cambiarColorTitulo(color) {
  document.getElementById("roomNombre").style.color = color;
}

function cambiarColorDesc(color) {
  document.getElementById("roomDesc").style.color = color;
}

function cambiarTamanio(valor) {
  document.getElementById("sliderVal").textContent = valor;
  document.getElementById("roomNombre").style.fontSize = valor + 'rem';
}


function resetear() {
  document.getElementById("roomImg").src = 'IMG/default.jpg';
  document.getElementById("roomImg").alt = "Habitación";

  document.getElementById("roomInfo").removeAttribute("style");

  document.getElementById("roomNombre").removeAttribute("style");
  document.getElementById("roomNombre").textContent = "Seleccione una habitación";

  document.getElementById("roomDesc").removeAttribute("style");
  document.getElementById("roomDesc").textContent = "Elija una opción2";

  document.getElementById("slider").value = 1.1;
  document.getElementById("sliderVal").textContent = '1.1';
  document.getElementById("colorCarta").value  = '#e0e0e0';
  document.getElementById("colorTitulo").value = '#333333';
  document.getElementById("colorDesc").value   = '#666666';

  if (habitacionActivo) { habitacionActivo.classList.remove("activo"); habitacionActivo = null; }
}