import 'bootstrap/dist/css/bootstrap.css';

function OpcionesMenu() {
  return (
    <div className="input-group row">
        <div className=" col-3 " >
          <a  href="#" className=" offset-6 LinkMenu">MOVILIDAD</a>
        </div>
        <div className=" col-3 " >
          <a className="LinkMenu" href="#">CUIDADO EN EL HOGAR</a>
        </div>
        <div className=" col-3 " >
          <a className="LinkMenu" href="#">PROFESIONALES DE LA SALUD</a>  
        </div>  
        <div className=" col-3 " >
          <a className="LinkMenu" href="#">TAPABOCAS Y DESINFECCIÓN</a>
        </div>  
          

    </div>
  );
}

export default OpcionesMenu;