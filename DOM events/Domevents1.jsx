import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state=({username:"sam"})
    }
    componentDidMount() {
       document.querySelector("button").addEventListener("click", ()=>{
         this.setState({username:"Max"})
       })
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button>ChangeName</button>
      </div>
    )
  }
}
