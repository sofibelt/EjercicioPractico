import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import Imagenes from './Imagenes';
import MiCarousel from './MiCarousel';
import NuevaColeccion from './NuevaColeccion';
import Collage from './Collage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Imagenes />
    <MiCarousel />
    <NuevaColeccion  titulo="NUEVA COLECCION"/>
    <Collage />
    <NuevaColeccion  titulo="AYUDAS PARA LA MARCHA"/>
    <NuevaColeccion  titulo="TERAPIAS RESPIRATORIAS"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
