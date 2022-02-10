import 'bootstrap/dist/css/bootstrap.css';
import MenuDesplegable from "./MenuDesplegable";

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
                <input id="TextoBaclassNamesqueda" type="text" className="form-control" placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..." />
                <button className="input-group-text " id="basic-addon1"><img src={require('./img/buscar.png')} width="20px" /></button>
                <div className=" col-1  " >
                  <a id="BotonesBusqueda"  className="offset-1 LinkMenu">MIS PEDIDOS</a>
                </div>
                <div className=" col-1 " >
                  <a id="BotonesBusqueda"  className="LinkMenu">HOLA ALIAD@</a>
                </div>
                <div className=" col-1 " >
                  <a id="BotonesBusqueda"  className="LinkMenu"><img src={require('./img/agregar-carrito.png')} width="30px" /> CARRITO</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="row ">
            <div>
                <MenuDesplegable />
            </div>
      </div>

    </div>
  );
}

export default Menu;
