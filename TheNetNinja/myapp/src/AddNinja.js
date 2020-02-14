import React, {Component} from 'react';

class AddNinja extends Component {
    state={
        name:null,
        age:null,
        belt:null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" onChange={this.handleChange}/>

                    
                    <label htmlFor="age">Idade</label>
                    <input type="text" id="age" onChange={this.handleChange}/>

                    
                    <label htmlFor="belt">Cinto</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default AddNinja; 