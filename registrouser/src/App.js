import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[ 
        {name:"admin", email:"admin@admin.com"},
        {name:"usuario1", email:"usuario1@mail.com"},
      ],
    }
  }

  render(){
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h2>Lista de usuarios</h2>
          <UserList users={this.state.users}/>
        </div>
        <div>
          <h2>Introducir usuario</h2>
          <UserForm />
        </div>
      </div>
    );
  }
}

export default App;


