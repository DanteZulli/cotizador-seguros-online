function loadForm(contentDiv) {
  fetch("../../car/car-form.html")
    .then((response) => response.text())
    .then((html) => {
      contentDiv.innerHTML = html;
    })
    .catch((error) => {
      console.log("Hubo un error al cargar el archivo:", error);
    });
}