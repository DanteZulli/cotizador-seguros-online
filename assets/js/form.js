function loadForm(contentDiv) {
  fetch("../../car/car-form.html" || "/cotizador-seguros-online/car/car-menu.html")
    .then((response) => response.text())
    .then((html) => {
      contentDiv.innerHTML = html;
      document
        .getElementById("myButton")
        .addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = '../confirmation.html';
        });
    })
    .catch((error) => {
      console.log("Hubo un error al cargar el archivo:", error);
    });
}
