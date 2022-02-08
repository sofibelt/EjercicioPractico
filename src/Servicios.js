import 'bootstrap/dist/css/bootstrap.css';

function Servicios(props) {

  return (
    <div id="ImagenCollage" className="form-group"  >
      <img  src={require('./img/paralimpicos.jpeg')}  id={props.imagen} className="EfectoImagen"/>
      <div className="TextoPrimeraImagenCollaje">
        <h1 className="text-center"> {props.frase}</h1>
        <button  type="button" className="btn btn-primary ">{props.boton}</button>
      </div>
    </div>
  );
}

export default Servicios;
