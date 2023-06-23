function loadPrice(contentDiv) {
  const localURL = "../../car/car-price.html";
  const deployURL = "/cotizador-seguros-online/car/car-price.html";
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const url = isLocal ? localURL : deployURL;
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      contentDiv.innerHTML = html;
    })
    .catch((error) => {
      console.log("Hubo un error al cargar el archivo:", error);
    });
}
