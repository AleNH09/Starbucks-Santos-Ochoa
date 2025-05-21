  function mostrarPopup() { //indica si se puso algo en donde pone email.
    let email = document.getElementById("email").value;
    if (email.trim() !== "") { // te mira si el espacio on esta vacio o algo y quita espacios en blanco al final y al principio
      document.getElementById("popup").style.display = "flex";
    } else {
      alert("Por favor, introduce un email válido.");
    } //lo que hace es que te enseña una alerta indicando que debes ingresar un email que sea válido.
  }

  function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
  } //esto hace que se cierra la ventana emergente cuando le damos a cerrar.
