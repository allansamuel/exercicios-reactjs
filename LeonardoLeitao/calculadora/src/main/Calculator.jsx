import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component {

    state = {
        ...initialState
    }

    clearMemory(){
        this.setState({ ...initialState})
    }

    setOperation = (operation) => {
        
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]} `)
                values[1] = 0    
            }catch(e){
                values[0] = this.state.values[0]
            }
            
            this.setState({
                displayValue:values[0],
                operation:equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values

            })
        }
        
    }

    addDigit = (n) =>{

        //verificando se é possível adicionar um . na operação
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }

        //constante utilizada para verificar se o display está limpo
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        //se o display estiver vazio (zero), o valor apresentado não mudará ao clicar em zero. E mudará, caso clique em outro valor
        const currentValue = clearDisplay ? '' : this.state.displayValue

        const displayValue = currentValue + n

        console.log(displayValue)

        this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render() {
 
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="/" click={this.setOperation} operation  />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}