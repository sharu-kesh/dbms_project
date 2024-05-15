import React from 'react'
import './login.css'
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from 'react'

export default function Police(){
        const [stationid,setStationid] = useState("")
        const [police_password,setPolice_password] = useState("")
        const navigate = useNavigate()
        const [error,setError] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const data={stationid,police_password}
        try{
        const response = await axios.post("http://localhost:5000/police/login",data)
        console.log(response.data)
        if(response.data.success){
            navigate("/police_home")
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
    },[stationid,police_password])
  return (
    <div className="wrapper-container">
    <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Police-Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Station id' onChange={(e)=>setStationid(e.target.value)} required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' onChange={(e)=>setPolice_password(e.target.value)} required />
                <FaLock className='icon'/>
            </div>
            <input type='submit' className="submit" value="Login" />
        </form>
    </div>
    </div>
  )
}

