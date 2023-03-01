import React from "react";

function FBC() {
    let handleForm = (e)=> {
       e.preventDefault()
       let userName = document.querySelector("#username").value
       let password = document.querySelector("#password").value
       console.log({userName, password});
    }
  return (
    <div>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input type="text" name="" id="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="password" />
        <br />
        <button onClick={handleForm}>Submit</button>
      </form>
    </div>
  );
}

export default FBC;
