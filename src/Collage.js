import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Collage() {

  const [seMuestraPrimeraImagen, cambiarSeMuestraPrimeraImagen] = useState(false);
  const [seMuestraSegundaImagen, cambiarSeMuestraSegundaImagen] = useState(false);
  const [seMuestraTerceraImagen, cambiarseMuestraTerceraImagen] = useState(false);
  const [seMuestraCuartaImagen, cambiarseMuestraCuartaImagen] = useState(false);
  const [seMuestraQuintaImagen, cambiarseMuestraQuintaImagen] = useState(false);

  return (
    <div class="offset-1" id="Collage">
      <div  class="row">
        <div class="col-7 ">
          <div  class="row">
              <div class="col-7 ">
                <button
                  onMouseEnter={() => cambiarSeMuestraPrimeraImagen(true)}
                  onMouseLeave={() => cambiarSeMuestraPrimeraImagen(false)}>
                  {seMuestraPrimeraImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="PrimeraImagenCollage" class="EfectoImagen"/>
                  )}
                  {!seMuestraPrimeraImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="PrimeraImagenCollage" />
                  )}
                </button>
              </div>
              <div class="col-1 ">
                <button
                  onMouseEnter={() => cambiarSeMuestraSegundaImagen(true)}
                  onMouseLeave={() => cambiarSeMuestraSegundaImagen(false)}>
                  {seMuestraSegundaImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="SegundaImagenCollage" class="EfectoImagen"/>
                  )}
                  {!seMuestraSegundaImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="SegundaImagenCollage" />
                  )}
                </button>
              </div>
          </div>
          <div  class="row">
              <div  class="col-5 ">
                <button
                  onMouseEnter={() => cambiarseMuestraTerceraImagen(true)}
                  onMouseLeave={() => cambiarseMuestraTerceraImagen(false)}>
                  {seMuestraTerceraImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="TerceraImagenCollage" class="EfectoImagen"/>
                  )}
                  {!seMuestraTerceraImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="TerceraImagenCollage" />
                  )}
                </button>
              </div>
              <div class="col-3 ">
                <button
                  onMouseEnter={() => cambiarseMuestraCuartaImagen(true)}
                  onMouseLeave={() => cambiarseMuestraCuartaImagen(false)}>
                  {seMuestraCuartaImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="CuartaImagenCollage" class="EfectoImagen"/>
                  )}
                  {!seMuestraCuartaImagen && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="CuartaImagenCollage" />
                  )}
                </button>
              </div>
          </div>
        </div>
        <div class="col-2 ">
          <button
            onMouseEnter={() => cambiarseMuestraQuintaImagen(true)}
            onMouseLeave={() => cambiarseMuestraQuintaImagen(false)}>
            {seMuestraQuintaImagen && (
              <img  src={require('./img/paralimpicos.jpeg')}  id="QuintaImagenCollage" class="EfectoImagen"/>
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
