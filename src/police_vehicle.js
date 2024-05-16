import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Police_vehicle() {
    async function handleSubmit(e){
        e.preventDefault()
        const data={regno}
        try{
        const response = await axios.post("http://localhost:5000/police/login/vehicle",data)
        console.log(response.data)
        if(response.data.success){
            navigate("/home_police")
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
    },[])
    const [regno,setRegno]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()
  return (
    <div className='police_reg'>
        <form >
            <h2>Vehicle Registration Number</h2>
            <input type="text"  placeholder='Enter registration number'required onChange={(e)=>setRegno(e.target.value)}/>
            <div className="">
            <button type='submit'onClick={handleSubmit}> Submit</button>
            {error && <p id="err">{error}</p>}

            </div>
        </form>
    </div>
  )
}

export default Police_vehicle