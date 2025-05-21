var openButton = document.getElementById("openMenu");
var closeButton = document.getElementById("closeMenu");
var menu = document.getElementById("sideMenu");

// Cuando se hace clic en el botón de abrir
openButton.onclick = function() {
  menu.style.right = "0"; // Mueve el menú 
  document.body.classList.add("no-scroll"); //bloquea el scroll
};

// Cuando se hace clic en el botón de cerrar
closeButton.onclick = function() {
  menu.style.right = "-120%"; // Esconde el menú hacia la derecha
  document.body.classList.remove("no-scroll"); //permite scroll
};