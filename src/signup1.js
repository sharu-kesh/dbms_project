import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
axios.defaults.withCredentials = true
function Signup1() {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [gender,setGender] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [email,setEmail] = useState("")
    const [aadhar,setAadhar] = useState("")
    const [dob,setDob] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    async function handleClick(e){
    e.preventDefault()
    const data={fname,lname,gender,phone,address,email,aadhar,dob}
    try{
    const response = await axios.post("http://localhost:5000/user/signup1",data)
    console.log(response.data)
    if(response.data.success){
        navigate("/user/signup1/signup2")
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
    <div className="wrapper-container">
    <div className="wrapper">
        <form>
            <h1>New Registration</h1>
            <h5>Personal details</h5>
            <div className="input-box">
                <input type="text" placeholder='Firstname' onChange={(e)=>setFname(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Lastname' onChange={(e)=>setLname(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='gender' onChange={(e)=>setGender(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="" placeholder='phone number' onChange={(e)=>setPhone(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='address' onChange={(e)=>setAddress(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='aadhar' onChange={(e)=>setAadhar(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="date" placeholder='dob' onChange={(e)=>setDob(e.target.value)}
                required
                ></input>
            </div>
            <input type='submit' className="submit" value='Next'
            onClick={handleClick}
            />        </form>
             {error && <p id="err">{error}</p>}

    </div>
    </div>
  )
}

export default Signup1