import 'bootstrap/dist/css/bootstrap.css';

function Servicios(props) {

  return (
    <div id="ImagenCollage" class="form-group"  >
      <img  src={require('./img/paralimpicos.jpeg')}  id={props.imagen} class="EfectoImagen"/>
      <div class="TextoPrimeraImagenCollaje">
        <h1 class="text-center"> {props.frase}</h1>
        <button  type="button" className="btn btn-primary ">{props.boton}</button>
      </div>
    </div>
  );
}

export default Servicios;
