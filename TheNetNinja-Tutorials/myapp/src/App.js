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

  addNinja = (ninja) => {
    ninja.id = Math.random()
    /* variavel local p/ copiar os objetos do state em um novo array. 
    Para poder adicionar o novo ninja sem alterar o state diretamente */
    let ninjas = [...this.state.ninjas, ninja] 
    this.setState({
      ninjas: ninjas //transforma o state atual no vetor atualizado
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id //cria novo array filtrando apenas os ninjas que não tenham o id do parâmetro
    })
    this.setState({
      ninjas: ninjas
    })
  }

  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        {/* passa essa lista como props de Ninja */}
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/> 

        <AddNinja addNinja={this.addNinja} />

      </div>
    );
  }
  
}

export default App; 
