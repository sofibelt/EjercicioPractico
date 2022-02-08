import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Servicios from './Servicios';


function Collage() {

  const [seMuestraPrimeraImagen, cambiarSeMuestraPrimeraImagen] = useState(false);
  const [seMuestraSegundaImagen, cambiarSeMuestraSegundaImagen] = useState(false);
  const [seMuestraTerceraImagen, cambiarseMuestraTerceraImagen] = useState(false);
  const [seMuestraCuartaImagen, cambiarseMuestraCuartaImagen] = useState(false);
  const [seMuestraQuintaImagen, cambiarseMuestraQuintaImagen] = useState(false);

  return (
    <div className="offset-1" id="Collage">
      <div  className="row">
        <div className="col-7 ">
          <div  className="row">
              <div className="col-7 ">
                <button
                  onMouseEnter={() => cambiarSeMuestraPrimeraImagen(true)}
                  onMouseLeave={() => cambiarSeMuestraPrimeraImagen(false)}>
                  {seMuestraPrimeraImagen && (
                    <Servicios frase="¿Por qué elegirnos?" boton="CONOCE MÁS DE NOSOTROS" imagen="PrimeraImagenCollage" />
                  )}
                  {!seMuestraPrimeraImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="PrimeraImagenCollage" />
                  )}
                </button>
              </div>
              <div className="col-1 ">
                <button
                  onMouseEnter={() => cambiarSeMuestraSegundaImagen(true)}
                  onMouseLeave={() => cambiarSeMuestraSegundaImagen(false)}>
                  {seMuestraSegundaImagen && (
                    <Servicios frase="¿Por qué elegirnos?" boton="CONOCE MÁS DE NOSOTROS" imagen="SegundaImagenCollage" />
                  )}
                  {!seMuestraSegundaImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="SegundaImagenCollage" />
                  )}
                </button>
              </div>
          </div>
          <div  className="row">
              <div  className="col-5 ">
                <button
                  onMouseEnter={() => cambiarseMuestraTerceraImagen(true)}
                  onMouseLeave={() => cambiarseMuestraTerceraImagen(false)}>
                  {seMuestraTerceraImagen && (
                    <Servicios frase="¿Por qué elegirnos?" boton="CONOCE MÁS DE NOSOTROS" imagen="TerceraImagenCollage" />
                  )}
                  {!seMuestraTerceraImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="TerceraImagenCollage" />
                  )}
                </button>
              </div>
              <div className="col-3 ">
                <button
                  onMouseEnter={() => cambiarseMuestraCuartaImagen(true)}
                  onMouseLeave={() => cambiarseMuestraCuartaImagen(false)}>
                  {seMuestraCuartaImagen && (
                    <Servicios frase="¿Por qué elegirnos?" boton="CONOCE MÁS DE NOSOTROS" imagen="CuartaImagenCollage" />
                  )}
                  {!seMuestraCuartaImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="CuartaImagenCollage" />
                  )}
                </button>
              </div>
          </div>
        </div>
        <div className="col-2 ">
          <button
            onMouseEnter={() => cambiarseMuestraQuintaImagen(true)}
            onMouseLeave={() => cambiarseMuestraQuintaImagen(false)}>
            {seMuestraQuintaImagen && (
              <Servicios frase="¿Por qué elegirnos?" boton="CONOCE MÁS DE NOSOTROS" imagen="QuintaImagenCollage" />
            )}
            {!seMuestraQuintaImagen && (
              <img  src={require('./img/paralimpicos.jpeg')}  id="QuintaImagenCollage" />
            )}
          </button>
        </div>
      </div>

</div>
  );
}

export default Collage;
