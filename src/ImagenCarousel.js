import 'bootstrap/dist/css/bootstrap.css';


function ImagenCarousel(props) {

  return (
    <div>
      <img className="d-block w-100 EfectoImagen" src={require('./img/'+props.imagen)} alt="Image One"/>
      <h6>{props.descripcion}</h6>
    </div>
  );
}

export default ImagenCarousel;
