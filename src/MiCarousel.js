import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ImagenCarousel from './ImagenCarousel';

function MiCarousel() {

  const [primeraOpcion, cambiaPrimeraOpcion] = useState(false);
  const [segundaOpcion, cambiaSegundaOpcion] = useState(false);
  const [terceraOpcion, cambiaTerceraOpcion] = useState(false);
  const [cuartaOpcion, cambiaCuartaOpcion] = useState(false);
  const [quintaOpcion, cambiaQuintaOpcion] = useState(false);
  const [sextaOpcion, cambiaSextaOpcion] = useState(false);

  return (
    <div id="Carousel">
      <Carousel>
        <Carousel.Item interval={1500}>
          <div className="row">
                <div className="col">
                <button
                  onMouseEnter={() => cambiaPrimeraOpcion(true)}
                  onMouseLeave={() => cambiaPrimeraOpcion(false)}
                  >
                  {primeraOpcion && (
                    <ImagenCarousel descripcion="Imagen 1" imagen='foto1.webp'/>
                  )}
                  {!primeraOpcion && (
                    <img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/>
                  )}
                  </button>
                </div>
                <div className="col">
                  <button
                    onMouseEnter={() => cambiaSegundaOpcion(true)}
                    onMouseLeave={() => cambiaSegundaOpcion(false)}
                    >
                    {segundaOpcion && (
                      <ImagenCarousel descripcion="Imagen 2" imagen='foto1.webp'/>
                    )}
                    {!segundaOpcion && (
                      <img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/>
                    )}
                    </button>
                </div>
                <div className="col">
                  <button
                    onMouseEnter={() => cambiaTerceraOpcion(true)}
                    onMouseLeave={() => cambiaTerceraOpcion(false)}
                    >
                    {terceraOpcion && (
                      <ImagenCarousel descripcion="Imagen 3" imagen='foto1.webp'/>
                    )}
                    {!terceraOpcion && (
                      <img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/>
                    )}
                    </button>
                </div>
            </div>

        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="row">
            <div className="col">
              <button
                onMouseEnter={() => cambiaCuartaOpcion(true)}
                onMouseLeave={() => cambiaCuartaOpcion(false)}
                >
                {cuartaOpcion && (
                  <ImagenCarousel descripcion="Imagen 4" imagen='foto1.webp'/>
                )}
                {!cuartaOpcion && (
                  <img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/>
                )}
                </button>
            </div>
            <div className="col">
              <button
                onMouseEnter={() => cambiaQuintaOpcion(true)}
                onMouseLeave={() => cambiaQuintaOpcion(false)}
                >
                {quintaOpcion && (
                  <ImagenCarousel descripcion="Imagen 5" imagen='foto1.webp'/>
                )}
                {!quintaOpcion && (
                  <img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/>
                )}
                </button>
            </div>
            <div className="col">
              <button
                onMouseEnter={() => cambiaSextaOpcion(true)}
                onMouseLeave={() => cambiaSextaOpcion(false)}
                >
                {sextaOpcion && (
                  <ImagenCarousel descripcion="Imagen 6" imagen='foto1.webp'/>
                )}
                {!sextaOpcion && (
                  <img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/>
                )}
                </button>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MiCarousel;
