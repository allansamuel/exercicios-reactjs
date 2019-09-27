import React, {Component} from 'react'
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Pagar conta renner :P'},
      {id: 2, content: 'Estudar para a prova de Matemática'}
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Tarefas</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
      </div>
    );
  }
}

export default App;
