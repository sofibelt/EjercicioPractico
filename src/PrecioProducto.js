import 'bootstrap/dist/css/bootstrap.css';

function Producto() {

  return (
    <div id="ImagenesNuevaColleccion" className="form-group  "  >
      <img  src={require('./img/silladeruedas.jpeg')}  />
      <h6 className="text-center"> Informacion</h6>
      <div className="btn btn-primary ">AÑADIR AL CARRITO</div>
    </div>
  );
}

export default Producto;
