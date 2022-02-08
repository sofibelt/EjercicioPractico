import 'bootstrap/dist/css/bootstrap.css';

function Producto() {

  return (
    <div id="ImagenesNuevaColleccion" className="form-group  "  >
      <img  src={require('./img/silladeruedas.jpeg')}  />
      <h6 className="text-center"> Informacion</h6>
      <button  type="button" className="btn btn-primary ">AÑADIR AL CARRITO</button>
    </div>
  );
}

export default Producto;
