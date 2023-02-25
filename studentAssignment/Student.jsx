import React, { Component } from 'react'

export default class Student extends Component {
  
    constructor() {
        super()
        this.state = {studentId:1 , studentName:"Raj" , gender:"Male" , studentClass:"10th"}
    }
    handlerStudentId = ()=>{
      this.setState({studentId :2})
    }
    handlerStudentName = ()=>{
      this.setState({studentName :"Sam"})
    }
    handlerStudentGender = ()=>{
      this.setState({gender :"Male"})
    }
    handlerStudentClass = ()=>{
      this.setState({studentClass :"9th"})
    }
  render() {
    return (
      <div className='card'>
        <div className="details">
          <h1>{this.state.studentId}</h1>
          <h1>{this.state.studentName}</h1>
          <h1>{this.state.gender}</h1>
          <h1>{this.state.studentClass}</h1>
        </div>
        <div className="form">
          <div className="btn">
            <button onClick={this.handlerStudentId}>setStudentId</button>
            <button onClick={this.handlerStudentName}>setStudentName</button>
            <button onClick={this.handlerStudentGender}>setStudentGender</button>
            <button onClick={this.handlerStudentClass}>setStudentClass</button>
          </div>
      </div>
        </div>
        
    )
  }
}
