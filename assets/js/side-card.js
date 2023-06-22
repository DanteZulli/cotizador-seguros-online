let showing = "car";
function changeSideCard() {
  if (showing === "car") {
    showing = "plan";
    document.getElementById("side-card").innerHTML = `
        <div class="card-header">
            <div class="card-header-title">
              <i class="fa-solid fa-shield"></i>
              <h6 class="text-uppercase mb-0">Plan Seleccionado</h6>
            </div>
            <div class="switch-btn" onclick="changeSideCard()" data-toggle="tooltip" data-placement="top" title="Mostrar Datos del Vehículo">
              <i class="fa-solid fa-car"></i>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              Plan 2<br />
              TERCEROS COMPLETOS<br />
              Cuota Mensual: $ 1.000
            </p>
          </div>
        `;
  } else if (showing === "plan") {
    showing = "car";
    document.getElementById("side-card").innerHTML = `
        <div class="card-header">
            <div class="card-header-title">
              <i class="fas fa-car"></i>
              <h6 class="text-uppercase mb-0">Datos del vehículo</h6>
            </div>
            <div class="switch-btn" onclick="changeSideCard()" data-toggle="tooltip" data-placement="top" title="Mostrar Plan Seleccionado">
              <i class="fa-solid fa-shield"></i>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              Dodge Charger 1966<br />
              Patente:ABC123<br />
              Suma Asegurada: $ 1.000.000
            </p>
          </div>`;
  } else {
    console.log("Eso no funcionó :P");
  }
}
