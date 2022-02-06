import 'bootstrap/dist/css/bootstrap.css';

function Menu() {
  return (
    <div >
    <nav className="navbar offset-1">
        <div className="row">
          <div className="col-1 ">
            <img src={require('./img/logo.png')} width="80px" />
          </div>
          <div className="col-10 ">
            <form id="BarraBusqueda" className="form-inline">
              <div className="input-group col-10">
                <input type="text" className="form-control" placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..." />
                <button className="input-group-text" id="basic-addon1"><img src={require('./img/buscar.png')} width="20px" /></button>
                <button type="button" className="btn btn-link">MIS PEDIDOS</button>
                <button type="button" className="btn btn-link">HOLA ALIAD@</button>
                <button type="button" className="btn btn-link"><img src={require('./img/agregar-carrito.png')} width="30px" /> CARRITO</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
