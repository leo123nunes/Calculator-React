import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button.jsx'
import Display from '../components/Display.jsx'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component{
    state = {...initialState}

    constructor(props){
        super(props)

        
        this.addDigit = this.addDigit.bind(props)
        this.setOperation = this.setOperation.bind(props)
        this.cleanMemory = this.cleanMemory.bind(props)
    }

    addDigit = (digit) => {
        if(digit==='.' && this.state.displayValue.includes('.')){
            return
        }

        var clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        var currentValue = clearDisplay ? '' : this.state.displayValue

        var displayValue = currentValue + digit

        this.setState({displayValue, clearDisplay: false})

        if(digit != '.'){
            var index = this.state.current
            var values = [...this.state.values]
            values[index] = parseFloat(displayValue)
            this.setState({values})
        }


    }

    setOperation(operation){
        console.log(operation)
    }

    cleanMemory = () => {
        this.setState({...initialState})
    }

    render(){
        return <div className="calculator">
            <Display value={this.state.displayValue}></Display>
            <Button label="AC" onclick={this.cleanMemory} triple></Button>
            <Button label="/" onclick={this.setOperation} operation></Button>
            <Button label="7" onclick={this.addDigit}></Button>
            <Button label="8" onclick={this.addDigit}></Button>
            <Button label="9" onclick={this.addDigit}></Button>
            <Button label="*" onclick={this.setOperation} operation></Button>
            <Button label="4" onclick={this.addDigit}></Button>
            <Button label="5" onclick={this.addDigit}></Button>
            <Button label="6" onclick={this.addDigit}></Button>
            <Button label="-" onclick={this.setOperation} operation></Button>
            <Button label="1" onclick={this.addDigit}></Button>
            <Button label="2" onclick={this.addDigit}></Button>
            <Button label="3" onclick={this.addDigit}></Button>
            <Button label="+" onclick={this.setOperation} operation></Button>
            <Button label="0" onclick={this.addDigit} double></Button>
            <Button label="." onclick={this.addDigit}></Button>
            <Button label="=" onclick={this.setOperation} operation></Button>
        </div>
    }
}