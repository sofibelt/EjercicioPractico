import 'bootstrap/dist/css/bootstrap.css';
import NuevaColeccion from './NuevaColeccion';

function Opciones() {

  return (
    <div id="Opciones">
      <div class="btn-group offset-3" role="group" aria-label="Basic example">
        <button id="BotonesOpciones" type="button" class="btn btn-primary">SILLA DE RUEDAS</button>
        <button id="BotonesOpciones" type="button" class="btn btn-primary">TERAPIA EN EL HOGAR</button>
        <button id="BotonesOpciones" type="button" class="btn btn-primary">MOVILIDAD</button>
      </div>
      <div id="PadreOpciones">
          <img id="FondoOpciones" src={require('./img/fondosilladeruedas.jpeg')} />
          <div class="TextoOpciones">
            <NuevaColeccion  titulo="SILLAS DE RUEDAS"/>
          </div>
      </div>
    </div>
  );
}

export default Opciones;
