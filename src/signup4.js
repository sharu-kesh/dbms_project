import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
function Signup4() {
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    async function handleClick(e){
    e.preventDefault()
    const data={password,cpassword}
    try{
    const response = await axios.post("http://localhost:5000/user/signup",data)
    console.log(response.data)
    if(response.data.success){
        navigate("/user")
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
    <div className="wrapper">
        <form>
            <h1>New Registration</h1>
            <h5>Set Password</h5>
            <div className="input-box">
                <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Confirm Password' onChange={(e)=>setCpassword(e.target.value)}
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

export default Signup4