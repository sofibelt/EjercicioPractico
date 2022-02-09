import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';
import OpcionesMenu from "./OpcionesMenu";

export default class MenuDesplegable extends Component{

    state={
      mostrarMenu:true
    }
    
    

    cambiarEstado=()=>{
       if(this.state.mostrarMenu){
         this.setState({mostrarMenu:false});
       }else{
        this.setState({mostrarMenu:true});
       }
       console.log(this.mostrarMenu);
    };

    render(){
      const seMuestraMenu= this.state.mostrarMenu;
      return (
        <nav class=" offset-1">
        <button type="button" onClick={this.cambiarEstado}><img src={require('./img/menu.png')} width="30px" /></button>
        <div >
          {seMuestraMenu ? <OpcionesMenu />:<div></div>}
        </div>
      </nav>
      );
    }
  
}

