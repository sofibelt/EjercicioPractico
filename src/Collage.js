import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Collage() {

  const [seMuestra, cambiarSeMuestra] = useState(false);

  return (
    <div>
      <div id="PrimeraImagenNuevaColeccion" class="row">
        <div class="col-7 ">
          <div  class="row">
              <div class="col-3 ">
                <button
                  onMouseEnter={() => cambiarSeMuestra(true)}
                  onMouseLeave={() => cambiarSeMuestra(false)}>
                  {seMuestra && (
                    <img  src={require('./img/paralimpicos.jpeg')}  id="PrimeraImagenCollage" class="EfectoPrimeraImagen"/>
                  )}
                  {!seMuestra && (
                    <img  src={require('./img/silladeruedas.jpeg')}  id="PrimeraImagenCollage" class="EfectoPrimeraImagen"/>
                  )}
                </button>

              </div>
              <div  class="col-2 ">
                <img  src={require('./img/paralimpicos.jpeg')}  id="SegundaImagenCollage" />
              </div>
          </div>
          <div  class="row">
              <div  class="col-3 ">
                <img  src={require('./img/paralimpicos.jpeg')}  id="TerceraImagenCollage" />
              </div>
              <div class="col-2 ">
                <img  src={require('./img/paralimpicos.jpeg')}  id="CuartaImagenCollage"/>
              </div>
          </div>
        </div>
        <div class="col-2 ">
            <img  src={require('./img/paralimpicos.jpeg')}  id="QuintaImagenCollage" />
        </div>
      </div>

</div>
  );
}

export default Collage;
