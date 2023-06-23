function loadMenu(contentDiv) {
  const localURL = "../../car/car-menu.html";
  const deployURL = "/cotizador-seguros-online/car/car-menu.html";
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const url = isLocal ? localURL : deployURL;
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      contentDiv.innerHTML = html;
      document
        .getElementById("myButton")
        .addEventListener("click", function (event) {
          event.preventDefault();
          window.location.hash = "price";
        });
    })
    .catch((error) => {
      console.log("Hubo un error al cargar el archivo:", error);
    });
}
