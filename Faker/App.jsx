import React, { Component } from 'react'
import {faker}  from '@faker-js/faker'

export default class App extends Component {
    constructor() {
        super()
        this.state = {PHOTO: faker.image.avatar() , Name: faker.name.fullName() , company: faker.company.name() }
    }
    handleChangeDetails = ()=>{
        this.setState({PHOTO : faker.image.avatar() , Name: faker.name.fullName() , company: faker.company.name()})
    }
  render() {
    return (
      <div>
        <img src={this.state.PHOTO} />
        <h1>{this.state.Name}</h1>
        <h1>{this.state.company}</h1>
        <button onClick={this.handleChangeDetails}>Change details</button>
      </div>
    )
  }
}
