function mostrarPopupReserva(event) {
    event.preventDefault(); // Evita que se recargue la página
    document.getElementById("popup-reserva").style.display = "flex";
  }

  function cerrarPopupReserva() {
    document.getElementById("popup-reserva").style.display = "none";

    // Limpiar el formulario
    let formulario = document.querySelector(".formulario");
    formulario.reset();
  }