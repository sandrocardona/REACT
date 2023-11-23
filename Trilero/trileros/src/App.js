import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

const Boton = (props) => {
  return (
  <Button color={props.color} onClick={props.fn}>{props.nombre}</Button>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      texto:"¿podrás encontrarme?",
      color:""
    }  
  }
  
  mensaje() {
    this.setState({texto:"probando"})
  }
  


  render(){
    return (
      <div className="App">
      <h1>Adivina dónde está la bola</h1>
      <h2>{this.state.texto}</h2>
      <Boton color="primary" fn={()=>this.mensaje()} nombre={"UNO"}></Boton>
      <Boton color="secondary" fn={()=>this.mensaje()} nombre={"DOS"}></Boton>
      <Boton color="danger" fn={()=>this.mensaje()} nombre={"TRES"}></Boton>
      </div>
    );
  }
}

export default App;
