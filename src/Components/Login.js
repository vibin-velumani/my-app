import React, { useState } from "react"
import axios from "axios";
import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";

 function Login () {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("https://localhost:3000/login",{
                email,password

            })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div>Login
    <form action ="post">
        <input type ="email" onChange={(e)=>{setEmail(e.targetvalue)}} palceholder="Email"/>
        <input type ="password" onChange={(e)=>{setPassword(e.targetvalue)}} palceholder="Password"/>
        <input type = "submit"onClick={submit}/>
        <br>
        </br>
        <p> or</p>
      <Nav.Link onClick={()=>{Navigate('/Signup')}} className="head-att"> Signup </Nav.Link>
       


    </form>
    </div>
  )
}
export default Login;