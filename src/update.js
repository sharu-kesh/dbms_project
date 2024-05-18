import React,{ useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
axios.defaults.withCredentials = true;



function Update({userId}) {
  const [oldEmail,setOldEmail] = useState("")
  const [newEmail,setNewEmail] = useState("")
  const [oldPhoneNo,setOldPhoneNo] = useState("")
  const [newPhoneNO,setNewPhoneNo] = useState("")
  const [address,setAddress] = useState("")
  const navigate = useNavigate()
  const [error,setError] = useState("")
  

async function handleSubmit(e){
  e.preventDefault()
  const data={oldPhoneNo,oldEmail,newEmail,newPhoneNO,address}
  try{
  const response = await axios.post("http://localhost:5000/user/login/update",data)
  //console.log(response.data)
  if(response.data.success){
      navigate("/home")
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
  return (
<div className="u">
        <div className="pcontainer">
            <form onSubmit={handleSubmit}>
                <div className="pinput_box">
            <label htmlFor="cno">Old Contact Number</label>
            <input type="text" onChange={(e)=>setOldPhoneNo(e.target.value)}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="ncno">New Contact Number</label>
            <input type="text" onChange={(e)=>setNewPhoneNo(e.target.value)}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="email">Old Email</label>
            <input type="email" onChange={(e)=>setOldEmail(e.target.value)}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="nemail">New Email</label>
            <input type="email" onChange={(e)=>setNewEmail(e.target.value)}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="naddress">New Address</label>
            <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <button type='submit' className="submit">Submit</button>
            </form>
        </div>
        </div>  )
}

export default Update