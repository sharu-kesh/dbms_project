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
<div className="complaintt">
    <div className="complaintForm">
        <div className="complaintTitle">UPDATE PERSONAL DETAILS </div>
        <div className="complaintTable">
            <table className='t1'>
                <thead>OLD VALUES</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">OLD PHONE NO.</label>
                    </tr>
                    <tr>
                    <input type="text" placeholder="Enter old phone number" onChange={(e)=>setOldPhoneNo(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">OLD E-MAIL ID</label>
                    </tr>
                    <tr>
                    <input type="text" placeholder="Enter old mail id" onChange={(e)=>setOldEmail(e.target.value)} required/>
                    </tr>
                </tbody>
            </table>
            <table className='t2'>
                <thead>NEW VALUES</thead>
                <tbody>
                <tr>
                        <label htmlFor="">NEW PHONE NO.</label>
                    </tr>
                    <tr>
                    <input type="text" placeholder="Enter new phone number" onChange={(e)=>setNewPhoneNo(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">NEW E-MAIL ID</label>
                    </tr>
                    <tr>
                    <input type="text" placeholder="Enter new mail id" onChange={(e)=>setNewEmail(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">NEW ADDRESS</label>
                    </tr>
                    <tr>
                    {/* <input type="text" placeholder="Enter new address" onChange={(e)=>setAddress(e.target.value)} required/> */}
                    <textarea placeholder="Enter new address" onChange={(e)=>setAddress(e.target.value)} required/>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="complaintButton">
        <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
        {error && <p id="err">{error}</p>}        
    </div>
    </div> 
  )
}

export default Update