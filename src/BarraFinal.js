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
          <div className="col-1 ">
            <button></button>
            </div>
          <div className="col-10 ">
            <p id="TextoBarraFinal">Aceptación de términos y condiciones</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarraFinal;
