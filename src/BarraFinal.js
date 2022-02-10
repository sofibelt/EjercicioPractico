import 'bootstrap/dist/css/bootstrap.css';

function BarraFinal() {
  return (
    <div id="BarraFinal">
      <div  className="row offset-1">
        <div className="col-3 ">
          <h6 id="TextoBarraFinalTitulo">SOBRE NOSOTROS</h6>
          <p id="TextoBarraFinal">
            ¿Quienes somos?<br />
            Nuestra historia<br />
            Nuestra informacion
          </p>
        </div>
        <div className="col-3">
          <h6 id="TextoBarraFinalTitulo">SOBRE NOSOTROS</h6>
          <p id="TextoBarraFinal">
            Profesionales de la salud<br />
            Protección e higiene<br />
            Control y prevencion<br />
            Movilidad<br />
            Indeoendencia y cuidado<br />
            en el hogar<br />
            Terapia respiratoria<br />
            Confort
          </p>
        </div>
        <div className="col-3 ">
          <h6 id="TextoBarraFinalTitulo">SOBRE NOSOTROS</h6>
          <p id="TextoBarraFinal">
            Politica de entregas<br />
            Politica de devoluciones<br />
            Politica de garantias<br />
            Politica de cancelación<br />
            Whatsapp 123 123 3434<br />
            PBX 01 8000 123 345<br />
            e-Mail:info@impormedical.com
          </p>
        </div>
        <div className="col-3 ">
         <h6 id="TextoBarraFinalTitulo">SOBRE NOSOTROS</h6>
         <input  type="text"  placeholder="" />
         <div className="row"> 
          <div id="DivBotonBarraFinal" className="col-2 ">
            <button id="BotonBarraFinal"> <img src={require('./img/BotonTerminosYCondiciones.jpg')}  /></button>
            </div>
          <div className="col-10 ">
            <p id="TextoBarraFinal">Aceptación de términos y condiciones</p>
          </div>
          <p id="TextoBarraFinal">Nuestros metodos de pago</p>
          <div className="row">
            <div className="col-3">
              <img src={require('./img/MercadoPago.png')}  width="50px"/>
            </div>
            <div className="col-3">
              <img src={require('./img/AmericanExpress.png')}  width="50px"/>
            </div>
            <div className="col-3">
              <img src={require('./img/Baloto.png')}  width="100px"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarraFinal;
