import React, { Component } from 'react'

export default class CBC extends Component {
    componentDidMount() {
        let form = document.querySelector("form")
        form.addEventListener("submit" , (e)=>{
            e.preventDefault()
            let username = document.getElementById("username").value
            let password = document.getElementById("password").value
            console.log({username , password});
        })
    }
  render() {
    return (
      <div>
        <form action="">

            <label htmlFor="username">Username:</label>
            <input type="text" name="" id="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="" id="password" />
            <br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
