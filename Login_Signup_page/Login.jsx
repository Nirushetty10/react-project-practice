import React,{useState} from 'react'
import Card from './Card'
import LOGIN from "./login.module.css"


function Login(props) {
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")

  let emailHandler =(e)=>{
     setemail(e.target.value)
  }
  let passwordHandler =(e)=>{
    setpassword(e.target.value)
 }
 let submitHandler =(e)=>{
  e.preventDefault()
    props.onLogin({email, password})
 }
  return (
    <>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <form action="" onSubmit={submitHandler}>
        <Card className={LOGIN.parent_box}>
            <h1>Log in to Facebook</h1>
            <input type="text" name="" id="" placeholder="Email address or phone number" onChange={emailHandler} />
            <input type="password" name="" id="" placeholder='Password' onChange={passwordHandler}/>
            <button type="submit">LOG IN</button>
            <div className={LOGIN.anchor}>
                <a href="#">Forgotten account?</a>
                <a href="#">Sign up for Facebook</a>
            </div>       
        </Card>
        </form>
    </>
  )
}

export default Login;