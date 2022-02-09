import 'bootstrap/dist/css/bootstrap.css';

function Hamburguesa() {
  return (
    <div className="collapse navbar-collapse col-8 offset-1">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#">MOVILIDAD</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">CUIDADO EN EL HOGAR</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">PROFESIONALES DE LA SALUD</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">TAPABOCAS Y DESINFECCIÓN</a>
                    </li>            
                  </ul>
                </div>
  );
}

export default Hamburguesa;