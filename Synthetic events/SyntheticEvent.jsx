import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state=({userName:"sam"})
    }
  render() {
    return (
      <div>
         <h1>{this.state.userName}</h1>
         <button onClick={()=>{
            this.setState({userName : "niru"})
         }}>Change</button>
      </div>
    )
  }
}
