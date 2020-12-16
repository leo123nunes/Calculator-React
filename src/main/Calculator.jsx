import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button.jsx'
import Display from '../components/Display.jsx'

export default class Calculator extends Component{
    constructor(props){
        super(props)

        this.addDigit = this.addDigit.bind(props)
        this.setOperation = this.setOperation.bind(props)
        this.cleanMemory = this.cleanMemory.bind(props)
    }

    addDigit(digit){
        console.log(digit)
    }

    setOperation(operation){
        console.log(operation)
    }

    cleanMemory(){
        console.log('cleaning the memory')
    }

    render(){
        return <div className="calculator">
            <Display value={100}></Display>
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