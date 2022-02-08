import 'bootstrap/dist/css/bootstrap.css';


function SegundoCollage() {

  return (
    <div id="SegundoCollaje" className="offset-2">
      <div  className="row">
        <div className="col-5 ">
          <img id="PrimerFotoSegundoCollaje" src={require('./img/paralimpicos.jpeg')}  />
          <div className="TextoPrimeraFotoSegundoCollaje">
            <h1>Empresa en </h1>
            <h1>crecimiento </h1>
          </div>
          <div className="BotonPrimeraFotoSegundoCollaje">
            <button className="btn btn-warning">VER PRODUCTOS</button>
          </div>
        </div>
        <div  className="col-1 ">
          <img id="SegundaFotoSegundoCollaje" src={require('./img/paralimpicos.jpeg')}   />
          <div className="TextoSegundaFotoSegundoCollaje">
            <h1>Complemento </h1>
            <h1>línea de</h1>
            <h1>oximetría</h1>
          </div>
          <div className="BotonSegundaFotoSegundoCollaje">
            <button className="btn btn-warning">VER PRODUCTOS</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SegundoCollage;
