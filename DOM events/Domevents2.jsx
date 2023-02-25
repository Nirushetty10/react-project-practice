import React, { Component } from 'react'

export default class App2 extends Component {
    constructor() {
      super()
      this.state={username:"niru"}
    }
    componentDidMount() {
       document.querySelector("input").addEventListener("keypress" , (e)=>{
         this.setState({username : e.target.value})
       })
    }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input type="text" />
      </div>
    )
  }
}
