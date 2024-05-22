import React, { useEffect, useState } from 'react'
import './login.css'
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import axios from "axios"
export default function User({setUserId}){
    const [rtoid,setRtoid] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const [isLoggedin, setIsLoggedin] = useState(false);

async function handleSubmit(e){
    e.preventDefault()
    const data={rtoid,password}
    try{
    const response = await axios.post("http://localhost:5000/rto/login",data)
    //console.log(response.data)    
    if(response.data.success){
        navigate("/admin/admin_home")
    }else{
        console.log(response.data.message)
        setError(response.data.message)
    }
    }catch(error){
        console.log("here")
        console.log(error);
      if (error?.response?.data?.message)
        setError(error?.response?.data?.message);
      else setError("Something went wrong! Please try again.");
    }
}
useEffect(function(){
    setError("")
},[rtoid,password])

    return (
    <div className="wrapper-container">
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Admin-Login</h1>
            <div className="input-box">
                <input type="text" placeholder='rto_id' onChange={(e)=>setRtoid(e.target.value)} required />
                <MdEmail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" 
                placeholder='Password' name='password' 
                onChange={(e)=>setPassword(e.target.value)}
                required />
                <FaLock className='icon'/>
            </div>
            <input type='submit' className="submit" value='Login'
            />
        </form>
        {error && <p id="err">{error}</p>}

    </div>
    </div>
  )
}
