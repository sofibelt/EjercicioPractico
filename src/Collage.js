import 'bootstrap/dist/css/bootstrap.css';

function Collage() {
  return (
    <div>
      <div id="PrimeraImagenNuevaColeccion" class="row">
        <div class="col-7 ">
          <div  class="row">
              <div class="col-3 ">
                <img  src={require('./img/paralimpicos.jpeg')}  id="PrimeraImagenCollage" class="EfectoPrimeraImagen"/>
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
