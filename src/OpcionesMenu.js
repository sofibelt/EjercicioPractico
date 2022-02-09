import 'bootstrap/dist/css/bootstrap.css';

function OpcionesMenu() {
  return (
    <div className="input-group offset-1">
        <div className=" col-2 " >
          <a id="Hamburguesa" href="#" className=" offset-6">MOVILIDAD</a>
        </div>
        <div className=" col-2 " >
          <a id="Hamburguesa" href="#">CUIDADO EN EL HOGAR</a>
        </div>
        <div className=" col-2 " >
          <a id="Hamburguesa" href="#">PROFESIONALES DE LA SALUD</a>  
        </div>  
        <div className=" col-2 " >
          <a id="Hamburguesa" href="#">TAPABOCAS Y DESINFECCIÓN</a>
        </div>  
          

    </div>
  );
}

export default OpcionesMenu;