import React, { Component } from 'react'
import Card from './Card'
import "./Card.css"
import jsondata from "./data.json"

export default class App extends Component {
    state ={empdata : jsondata}
  render() {
    return (
      <div className='profile_section'>
        <Card data={this.state.empdata}/>
      </div>
    )
  }
}
