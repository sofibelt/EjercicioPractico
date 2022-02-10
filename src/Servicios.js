import 'bootstrap/dist/css/bootstrap.css';

function Servicios(props) {

  return (
    <div id="ImagenCollage" className="form-group"  >
      <img  src={require('./img/'+props.nomImagen)}  id={props.imagen} className="EfectoImagen"/>
      <div className="TextoPrimeraImagenCollaje">
        <h1 className="text-center"> {props.frase}</h1>
        <div className="btn btn-primary ">{props.boton}</div>
      </div>
    </div>
  );
}

export default Servicios;
