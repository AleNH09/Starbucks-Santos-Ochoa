// Guardamos las imágenes que queremos usar
let misImagenes = [
  "media/combo 1fondo.jpg",
  "media/combo 2fondo.jpg",
  "media/combo 3fondo.jpg",
  "media/combo 4fondo.jpg",
  "media/combo 5fondo.jpg"
];

// Empezamos por la primera imagen
let imagenActual = 0;

// Esta función mueve el carrusel hacia la derecha o izquierda
function moverCarrusel(direccion) {
  let carrusel = document.getElementById("carrusel"); // Busco el carrusel en el HTML

  let producto = carrusel.querySelector(".prod-carrusel"); // Busco uno de los productos
  let ancho = producto.offsetWidth + 20; // Le sumo 20 de margen

  // Me muevo a la izquierda o derecha
  if (direccion === 1) {
    carrusel.scrollLeft += ancho; // Me muevo hacia la derecha
  } else {
    carrusel.scrollLeft -= ancho; // Me muevo hacia la izquierda
  }
}

// Esta función abre la imagen grande (lightbox)
function mostrarImagen(indice) {
  imagenActual = indice; // Guardamos cuál imagen hemos tocado

  let cuadro = document.getElementById("lightbox"); // Buscamos el contenedor del lightbox
  let imagen = document.getElementById("lightbox-img"); // Buscamos la imagen grande

  imagen.src = misImagenes[imagenActual]; // Ponemos la imagen que toca
  cuadro.style.display = "flex"; // Mostramos el lightbox
}

// Esta función cierra la imagen grande
function cerrarImagen() {
  let cuadro = document.getElementById("lightbox"); // Buscamos el contenedor
  cuadro.style.display = "none"; // Lo ocultamos
}

// Esta función cambia de imagen dentro del lightbox
function cambiarImagen(direccion, evento) {
  evento.stopPropagation(); // Evitamos que se cierre si clicamos en la flecha

  // Cambiamos el número de imagen (si nos pasamos volvemos al principio o final)
  imagenActual = imagenActual + direccion;

  if (imagenActual < 0) {
    imagenActual = misImagenes.length - 1; // Si bajamos de 0, vamos a la última
  }

  if (imagenActual >= misImagenes.length) {
    imagenActual = 0; // Si nos pasamos del final, volvemos al principio
  }

  // Cambiamos la imagen que se muestra
  let imagen = document.getElementById("lightbox-img");
  imagen.src = misImagenes[imagenActual];
}