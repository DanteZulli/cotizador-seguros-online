function loadContent() {
  const hash = window.location.hash.slice(1);
  const contentDiv = document.getElementById("content");

  if (hash === "price") {
    loadPrice(contentDiv);
  } else if (hash === "form") {
    loadApplication(contentDiv);
  } else if (hash === "confirmation") {
    loadConfirmation(contentDiv);
  } else if (hash === "") {
    return;
  } else {
    contentDiv.innerHTML =
      "<h1>404</h1><p>Lo rompiste :(</p><p>Intenta con <a href='#price'>price</a>, <a href='#form'>form</a> o <a href='#confirmation'>confirmation</a><br><p>O sinó siempre podés</p><a href='index.html'>Volver al inicio</a>";
  }
}

window.addEventListener("hashchange", loadContent);
window.addEventListener("DOMContentLoaded", loadContent);
