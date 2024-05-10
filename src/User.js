import React, { useState } from 'react'
import './login.css'
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Link from 'react-dom'
export default function User(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [error,setError] = useState("")
async function handleSubmit(e){
e.preventDefault()
    const data={email,password}
    try{
    const response = await axios.post("http://localhost:5000/user/login",data)
    console.log(response.data)
    if(response.data.success){
        navigate("/home")
    }else{
        console.log(response.data.message)
    }
    }catch(error){
        console.log("here")
        console.log(error);
      if (error?.response?.data?.message)
        setError(error?.response?.data?.message);
      else setError("Something went wrong! Please try again.");
    }
}

    return (
    <div className="wrapper-container">
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>User-Login</h1>
            {/* <div className="input-box">
                <input type="text" 
                placeholder='phone number' name='username'
                required />
                <FaUser className='icon'/>
            </div> */}
            <div className="input-box">
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} required />
                <MdEmail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" 
                placeholder='Password' name='password' 
                onChange={(e)=>setPassword(e.target.value)}
                required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                {/* <label><input type="checkbox" />Remember Me</label> */}
                <a href="#">Forgot Password?</a>
            </div>
            <input type='submit' className="submit" value='Login'
            />
            <p>Don't have an account?  <span onClick={()=>navigate("/signup1")} style={{color:"white",fontSize:"20px"}}>Register</span></p>
        </form>
        {error && <p id="err">{error}</p>}

    </div>
    </div>
  )
}
