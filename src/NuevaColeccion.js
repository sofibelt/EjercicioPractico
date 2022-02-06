import 'bootstrap/dist/css/bootstrap.css';

function NuevaColeccion(props) {
  return (
    <div id="NuevaColeccion">
      <h2 class="text-center">{props.titulo}</h2>
      <div id="PrimeraImagenNuevaColeccion"  className="row ">
            <div id="ImagenesNuevaColleccion" class="form-group  "  >
              <img  src={require('./img/silladeruedas.jpeg')}  />
              <h6 class="text-center"> Informacion</h6>
              <button  type="button" className="btn btn-primary ">AÑADIR AL CARRITO</button>
            </div>
            <div id="ImagenesNuevaColleccion" class="form-group">
              <img  src={require('./img/silladeruedas.jpeg')}  />
              <h6 class="text-center"> Informacion</h6>
              <button type="button" className="btn btn-primary">AÑADIR AL CARRITO</button>
            </div>
            <div id="ImagenesNuevaColleccion" class="form-group" >
              <img  src={require('./img/silladeruedas.jpeg')}  />
              <h6 class="text-center"> Informacion</h6>
              <button type="button" className="btn btn-primary">AÑADIR AL CARRITO</button>
            </div>
            <div id="ImagenesNuevaColleccion" class="form-group  ">
              <img  src={require('./img/silladeruedas.jpeg')}  />
              <h6 class="text-center"> Informacion</h6>
              <button type="button" className="btn btn-primary">AÑADIR AL CARRITO</button>
            </div>
      </div>
    </div>
  );
}

export default NuevaColeccion;
