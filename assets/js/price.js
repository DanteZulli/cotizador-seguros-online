const html = `
<div class="container-fluid" id="content">
<div class="row form-with-stepper">
  <div class="col-md-3">
    <div class="p-3 stepper">
      <div class="step completed">
        <i class="fas fa-car"></i>
        <p>Datos del vehículo</p>
        <span class="line"></span>
      </div>
      <div class="step active">
        <i class="fa-solid fa-sack-dollar"></i>
        <p>Cotización</p>
        <span class="line"></span>
      </div>
      <div class="step">
        <i class="fa-solid fa-file-lines"></i>
        <p>Solicitud Online</p>
        <span class="line"></span>
      </div>
      <div class="step">
        <i class="fa-solid fa-thumbs-up"></i>
        <p>Confirmación</p>
      </div>
    </div>
  </div>
  <div class="col-md-9">
    <div class="title">
      <h1>Cotización</h1>
      <p>Elegí un plan a tu medida - Uso Particular</p>
    </div>
    
<section class="pricing py-5">
<div class="container">
  <div class="row">
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Terceros ahorro</h5>
          <h6 class="card-price text-center">$21118<span class="period">/mes</span></h6>
          <hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Robo Hurto/Incendio Total</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Daño Total por Accidente</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Auto Sustituto por 5 Días</li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-secondary text-uppercase">Ver Más</a>
            <a href="#" class="btn btn-primary text-uppercase">COMPRAR</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Terceros Completo</h5>
          <h6 class="card-price text-center">$24793<span class="period">/mes</span></h6>
          <hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Robo/Inc Parcial S/Fcia.</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Daño Total Por Accidente</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Robo Hurto/Incendio Total</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Auto Sustituto por 5 Días</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Daño Parcial por Robo Total</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Cubierta/llanta hasta 1</li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-secondary text-uppercase">Ver Más</a>
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">Terceros Básico</h5>
          <h6 class="card-price text-center">$20667<span class="period">/mes</span></h6>
          <hr>
          <ul class="fa-ul">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Responsabilidad Civil</strong>
            </li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Robo/Hurto/Inc Parcial</li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Auto Sustituto por 5 Días</li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-secondary text-uppercase">Ver Más</a>
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  </div>
</div>
</div>
`;

function loadPrice(contentDiv) {
  contentDiv.innerHTML = html;
}
