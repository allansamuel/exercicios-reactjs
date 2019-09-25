import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
      ninjas : [
          {name:'a', age:25, belt:'aa', id:0},
          {name:'b', age:20, belt:'bb', id:1},
          {name:'c', age:30, belt:'cc', id:2}
      ]
  } //cria um state com a lista de props

  AddNinja = (ninja) => {

  }

  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        {/* passa essa lista como props de Ninja */}
        <Ninjas ninjas={this.state.ninjas}/> 

        <AddNinja />

      </div>
    );
  }
  
}

export default App; 
