import React from 'react'
import { useState,useEffect} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;
function Owner({userId}) {
  const [owner,setOwner] = useState({})
useEffect(function(){
    async function getOwner(){
        try {
            const respon = await axios.get(`http://localhost:5000/home/owner`)
            console.log(respon)
            setOwner(respon.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    getOwner()
},[userId])
  return (
<>
        <div className="o">
        <div className="pcontainer">
            <form action="">
                <div className="vinput_box">
            <label htmlFor="name">Name</label>
            <input type="text" value={owner.fullname}/>
            </div>
            <div className="vinput_box">
            <label htmlFor="bdDate">Age</label>
            <input type="text" />
            </div>
            <div className="vinput_box">
            <label htmlFor="gender">Gender</label>
            <input type="text" value={owner.gender}/>
            </div>
            <div className="vinput_box">
            <label htmlFor="phone">Contact</label>
            <input type="text" value={owner.phone_no}/>
            </div>
            <div className="vinput_box">
            <label htmlFor="aadhar">Aadhar</label>
            <input type="text" value={owner.aadhar_no}/>
            </div>
            <div className="vinput_box">
            <label htmlFor="email">Email</label>
            <input type="text" value={owner.email}/>
            </div>
            <div className="vinput_box">
            <label htmlFor="address">Address</label>
            <input type="text" value={owner.address}/>
            </div>
            </form>
        </div>
        </div>
        </>  )
}

export default Owner