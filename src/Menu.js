import 'bootstrap/dist/css/bootstrap.css';

function Menu() {
  return (
    <div id="Menu" >
    <nav className="navbar offset-1">
        <div className="row">
          <div className="col-1 ">
            <img src={require('./img/logo.png')} width="80px" />
          </div>
          <div className="col-8 ">
            <form id="BarraBusqueda" className="form-inline">
              <div className="input-group ">
                <input id="TextoBarraBusqueda" type="text" className="form-control" placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..." />
                <button className="input-group-text" id="basic-addon1"><img src={require('./img/buscar.png')} width="20px" /></button>
                <button id="BotonesBusqueda" type="button" className="btn btn-link">MIS PEDIDOS</button>
                <button id="BotonesBusqueda" type="button" className="btn btn-link">HOLA ALIAD@</button>
                <button id="BotonesBusqueda" type="button" className="btn btn-link"><img src={require('./img/agregar-carrito.png')} width="30px" /> CARRITO</button>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="row offset-1">
            <div className="col-1 ">
              <nav className="navbar  navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
            </div>
            <div className="col-8 offset-1">
              <button id="BotonesBusqueda" type="button" className="btn btn-link">MOVILIDAD</button>
              <button id="BotonesBusqueda" type="button" className="btn btn-link">CUIDADO EN EL HOGAR</button>
              <button id="BotonesBusqueda" type="button" className="btn btn-link">PROFESIONALES DE LA SALUD</button>
              <button id="BotonesBusqueda" type="button" className="btn btn-link">TAPABOCAS Y DESINFECCIÓN</button>
            </div>
      </div>

    </div>
  );
}

export default Menu;
