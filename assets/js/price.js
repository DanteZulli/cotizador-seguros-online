function loadPrice(contentDiv) {
  fetch("../../car/car-price.html" || "/car/car-price.html")
    .then((response) => response.text())
    .then((html) => {
      contentDiv.innerHTML = html;
    })
    .catch((error) => {
      console.log("Hubo un error al cargar el archivo:", error);
    });
}
