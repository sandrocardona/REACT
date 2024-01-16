import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Lista from './componentes/Lista';

function App() {

  /* HOOKS */
  const [ciudades, setCiudades]=useState(["Madrid","Malaga","Marbella","Estepona","Estepa","Benahavis","Benaohan"])

  /* FUNCIONES */
  function addCiudad(){
    let valorInput = document.getElementById('userInput').value;
    if(valorInput==""){
      document.getElementById("userInput").placeholder = "ciudad no valida"
    } else {
      setCiudades([...ciudades, valorInput])
      document.getElementById("userInput").placeholder = "Introducir ciudad"
    }
  }

  function filtrarCiudad(){

  }

  /* RENDERIZADO */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Lista de ciudades</h2>
        <div className="divCaja">
          <h3>Añadir ciudad</h3>
          <input id="userInput" type="text" placeholder='Introducir ciudad'></input><br/><br/>
          <input id="btnInput" type="submit" onClick={() => addCiudad()}></input>
        </div>
        <div className="divCaja">
          <h3>Filtrar ciudad</h3>
          <input id="userFilter" type="text" placeholder='Introducir ciudad'></input><br/><br/>
          <input id="btnFilter" type="submit" onClick={() => filtrarCiudad()}></input>
        </div>
        <Lista ciudades={ciudades}/>
      </header>
    </div>
  );
}

export default App;
