import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button.jsx'
import Display from '../components/Display.jsx'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)


        this.addDigit = this.addDigit.bind(props)
        this.setOperation = this.setOperation.bind(props)
        this.cleanMemory = this.cleanMemory.bind(props)
    }

    addDigit = (digit) => {
        if (digit === '.' && this.state.displayValue.toString().includes('.')) {
            return
        }

        var clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        var currentValue = clearDisplay && digit != '.' ? '' : this.state.displayValue

        var displayValue = currentValue + digit

        this.setState({ displayValue, clearDisplay: false })

        if (digit != '.') {
            var index = this.state.current
            var values = [...this.state.values]
            values[index] = parseFloat(displayValue)
            this.setState({ values })
        }


    }

    verifyDisplayValue(value){
        if(value.toString().length > 11){
            var newValue = value.toString().slice(0,10)
            return parseFloat(newValue)
        }else{
            return value
        }
    }

    setOperation = (operation) => {
        if (this.state.current == 0) {
            this.setState({ current: 1, operation, clearDisplay: true })
        } else {
            var values = [...this.state.values]
            var originalValues = [...this.state.values]

            try {
                var result = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
                var equal = operation == '='

                values[0] = result
                values[1] = 0

            } catch (e) {
                values = originalValues
            }

            if (equal) {
                this.setState({
                    displayValue: values[0], operation: null,
                    values, current: 0, clearDisplay: false
                })
            } else {
                this.setState({
                    displayValue: values[0], operation,
                    values, current: 1, clearDisplay: true
                })
            }
        }
    }

    cleanMemory = () => {
        this.setState({ ...initialState })
    }

    render() {
        return <div className="calculator">
            <Display value={this.verifyDisplayValue(this.state.displayValue)}></Display>
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