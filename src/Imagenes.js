import 'bootstrap/dist/css/bootstrap.css';

function Imagenes() {
  return (
    <div id="DivPortada">
      <img id="ImagenPortada" src={require('./img/foto1.webp')}/>

        <div id="TextoPortada" >
            <h1 id="TextoMAS" >MÁS</h1>
            <h1 id="DemasTextoPortada" >DE</h1>
            <h1 id="DemasTextoPortada" >800 MIL</h1>
            <h1 id="DemasTextoPortada">FAMILIAS</h1>
            <h1 id="DemasTextoPortada">HABILITADAS</h1>
            <button type="button" className="btn btn-primary">VER PRODUCTOS</button>
        </div>
    </div>
  );
}

export default Imagenes;
