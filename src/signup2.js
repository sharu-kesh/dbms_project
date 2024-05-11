import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
function Signup2() {
    const navigate = useNavigate()
    const [rno,setRno] = useState("")
    const [vmake,setVmake] = useState("")
    const [vmodel,setVmodel] = useState("")
    const [cno,setCno] = useState("")
    const [eno,setEno] = useState("")
    const [ftype,setFtype] = useState("")
    const [error,setError] = useState("")
    async function handleClick(e){
        e.preventDefault()
        const data={rno,vmake,vmodel,cno,eno,ftype}
        try{
        const response = await axios.post("http://localhost:5000/user/signup",data)
        console.log(response.data)
        if(response.data.success){
            navigate("/signup3")
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
            <h5>Vehicle details</h5>
            <div className="input-box">
                <input type="text" placeholder='Registration number' onChange={(e)=>setRno(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Vehicle Make' onChange={(e)=>setVmake(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Vehicle model' onChange={(e)=>setVmodel(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Chassis number' onChange={(e)=>setCno(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Engine number' onChange={(e)=>setEno(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='fuel type' onChange={(e)=>setFtype(e.target.value)}
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

export default Signup2