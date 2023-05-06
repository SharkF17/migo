let botonMenu
let menu

function start() {
  // Seleccionamos el botón del menú y el menú
  botonMenu = document.getElementById("toggle-menu");
  

  // Añadimos un evento de clic al botón del menú
  botonMenu.addEventListener("click", slideMenu);
}

// Toggle la clase "slide-out" en el menú
function slideMenu() {
  menu = document.getElementById("menu");

  alert("Hola Mundo!")
  menu.classList.toggle("slide-out");
}

window.addEventListener("load", start)