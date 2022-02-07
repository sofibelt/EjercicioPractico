import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Producto from './Producto'
import PrecioProducto from './PrecioProducto';

function NuevaColeccion(props) {

  const [seMuestraPrimeraImagen, cambiarSeMuestraPrimeraImagen] = useState(false);
  const [seMuestraSegundaImagen, cambiarSeMuestraSegundaImagen] = useState(false);
  const [seMuestraTerceraImagen, cambiarseMuestraTerceraImagen] = useState(false);
  const [seMuestraCuartaImagen, cambiarseMuestraCuartaImagen] = useState(false);

  return (
    <div id="NuevaColeccion">
      <h2 class="text-center">{props.titulo}</h2>
      <div id="PrimeraImagenNuevaColeccion"  className="row ">
            <div id="ImagenesNuevaColleccion" class="form-group  "  >
              <button
                onMouseEnter={() => cambiarSeMuestraPrimeraImagen(true)}
                onMouseLeave={() => cambiarSeMuestraPrimeraImagen(false)}>
                {seMuestraPrimeraImagen && (
                  <PrecioProducto />
                )}
                {!seMuestraPrimeraImagen && (
                  <Producto/>
                )}
              </button>
            </div>
            <div id="ImagenesNuevaColleccion" class="form-group">
              <button
                onMouseEnter={() => cambiarSeMuestraSegundaImagen(true)}
                onMouseLeave={() => cambiarSeMuestraSegundaImagen(false)}>
                {seMuestraSegundaImagen && (
                  <PrecioProducto />
                )}
                {!seMuestraSegundaImagen && (
                  <Producto/>
                )}
              </button>
            </div>
            <div id="ImagenesNuevaColleccion" class="form-group" >
              <button
                onMouseEnter={() => cambiarseMuestraTerceraImagen(true)}
                onMouseLeave={() => cambiarseMuestraTerceraImagen(false)}>
                {seMuestraTerceraImagen && (
                  <PrecioProducto />
                )}
                {!seMuestraTerceraImagen && (
                  <Producto/>
                )}
              </button>
            </div>
            <div id="ImagenesNuevaColleccion" class="form-group  ">
              <button
                onMouseEnter={() => cambiarseMuestraCuartaImagen(true)}
                onMouseLeave={() => cambiarseMuestraCuartaImagen(false)}>
                {seMuestraCuartaImagen && (
                  <PrecioProducto />
                )}
                {!seMuestraCuartaImagen && (
                  <Producto/>
                )}
              </button>
            </div>
      </div>
    </div>
  );
}

export default NuevaColeccion;
