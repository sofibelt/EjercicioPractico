import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import NuevaColeccion from './NuevaColeccion';
import OpcionesProductos from './OpcionesProductos';



function Opciones() {

  const [primeraOpcion, cambiaPrimeraOpcion] = useState(true);
  const [segundaOpcion, cambiaSegundaOpcion] = useState(false);
  const [terceraOpcion, cambiaTerceraOpcion] = useState(false);

  return (
    <div id="Opciones">
      <div class="btn-group offset-3" role="group" aria-label="Basic example">
        <button id="BotonesOpciones" type="button" class="btn btn-primary"  onClick={() => (cambiaPrimeraOpcion(true), cambiaSegundaOpcion(false), cambiaTerceraOpcion(false))}>SILLA DE RUEDAS</button>
        <button id="BotonesOpciones" type="button" class="btn btn-primary"  onClick={() => (cambiaSegundaOpcion(true), cambiaPrimeraOpcion(false), cambiaTerceraOpcion(false))}>TERAPIA EN EL HOGAR</button>
        <button id="BotonesOpciones" type="button" class="btn btn-primary"  onClick={() => (cambiaTerceraOpcion(true), cambiaSegundaOpcion(false), cambiaPrimeraOpcion(false))}>MOVILIDAD</button>
      </div>
      <div id="PadreOpciones">
          <img id="FondoOpciones" src={require('./img/fondosilladeruedas.jpeg')} />
          <div class="TextoOpciones">
            {primeraOpcion && (
              <OpcionesProductos  titulo="SILLAS DE RUEDAS"/>
            )}
            {segundaOpcion && (
              <OpcionesProductos  titulo="TERAPIA EN EL HOGAR"/>
            )}
            {terceraOpcion && (
              <OpcionesProductos  titulo="MOVILIDAD"/>
            )}

          </div>
      </div>
    </div>
  );
}

export default Opciones;
