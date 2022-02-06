import 'bootstrap/dist/css/bootstrap.css';


function SegundoCollage() {

  return (
    <div id="SegundoCollaje" class="offset-2">
      <div  class="row">
        <div class="col-5 ">
          <img id="PrimerFotoSegundoCollaje" src={require('./img/paralimpicos.jpeg')}  />
          <div class="TextoPrimeraFotoSegundoCollaje">
            <h1>Empresa en </h1>
            <h1>crecimiento </h1>
          </div>
          <div class="BotonPrimeraFotoSegundoCollaje">
            <button class="btn btn-warning">VER PRODUCTOS</button>
          </div>
        </div>
        <div  class="col-1 ">
          <img id="SegundaFotoSegundoCollaje" src={require('./img/paralimpicos.jpeg')}   />
          <div class="TextoSegundaFotoSegundoCollaje">
            <h1>Complemento </h1>
            <h1>línea de</h1>
            <h1>oximetría</h1>
          </div>
          <div class="BotonSegundaFotoSegundoCollaje">
            <button class="btn btn-warning">VER PRODUCTOS</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SegundoCollage;
