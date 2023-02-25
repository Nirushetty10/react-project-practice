import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state= {count :0}
    }
    handlerIncrement = ()=> {
        this.setState({count: this.state.count+1})
    }
    handlerDecrement = () =>{
        this.setState({count : this.state.count-1})
    }
    handleReset = ()=>{
        this.setState({count: 0})
    }
    
  render() {
    
    return (
      <div className="card">
        <h1>{this.state.count}</h1>
        <div className="btn">
        <button onClick={this.handlerIncrement}>+</button>
        <button onClick={this.handlerDecrement}>-</button>
        <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}
