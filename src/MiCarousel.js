import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function MiCarousel() {
  return (
    <div id="Carousel">
      <Carousel>
        <Carousel.Item interval={1500}>
          <div className="row">
                <div className="col">
                <button  ><img  className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/> Foto 1</button>
                </div>
                <div className="col">
                <button  ><img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/> Foto 1</button>
                </div>
                <div className="col">
                <button  ><img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/> Foto 1</button>
                </div>
            </div>

        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className="row">
            <div className="col">
            <button  ><img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/> Foto 1</button>
            </div>
            <div className="col">
            <button  ><img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/> Foto 1</button>
            </div>
            <div className="col">
            <button  ><img className="d-block w-100" src={require('./img/foto1.webp')} alt="Image One"/> Foto 1</button>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MiCarousel;
