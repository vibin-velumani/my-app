import React, { useState } from "react"
import axios from "axios";
import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";

 function Signup () {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("https://localhost:3000/signup",{
                email,password

            })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div>Signup
    <form action ="post">
        <input type ="email" onChange={(e)=>{setEmail(e.targetvalue)}} palceholder="Email"/>
        <input type ="password" onChange={(e)=>{setPassword(e.targetvalue)}} palceholder="Password"/>
        <input type = "submit"onClick={submit}/>
        <br>
        </br>
        <p> or</p>
      <Nav.Link onClick={()=>{Navigate('/Login')}} className="head-att"> Login </Nav.Link>
       


    </form>
    </div>
  )
}
export default Signup;