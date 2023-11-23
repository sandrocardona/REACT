import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Spinner } from 'reactstrap';

const Boton = (props) => {
  return( 
  <Button color={props.color} onClick={props.fn}>{props.palabra}</Button>
  )
}

const Cargando = (props) => {
  return <Spinner color={props.color}></Spinner>
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      palabra:"Cargando",
      color:""
    }
  }

  completado(){
    if(this.state.palabra === "Cargando"){
      this.setState({palabra:"Cargado completado"})
    }else{
      this.setState({palabra:"Cargando"})
    }
  }

  render(){
    return(
      <div className='App'>
        <h1><Cargando color={this.state.color}></Cargando>{this.state.palabra}</h1>
        <Boton color="primary" palabra={"enviar"} fn={()=>this.completado()}/>
      </div>

    );
  }
}



export default App;
