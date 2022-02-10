import 'bootstrap/dist/css/bootstrap.css';

function OpcionesMenu() {
  return (
    <div className="input-group row">
        <div className=" offset-1 col-2 " >
          <a  href="#" className="  LinkMenu">MOVILIDAD</a>
        </div>
        <div className=" col-2 " >
          <a className="LinkMenu" href="#"><p>CUIDADO <br /> EN EL HOGAR</p></a>
        </div>
        <div className=" col-3 " >
          <a className="LinkMenu" href="#"><p>PROFESIONALES <br/>DE LA SALUD</p></a>  
        </div>  
        <div className=" col-3 " >
          <a className="LinkMenu" href="#"><p>TAPABOCAS <br/>Y DESINFECCIÓN</p></a>
        </div>  
          

    </div>
  );
}

export default OpcionesMenu;