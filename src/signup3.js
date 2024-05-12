import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
function Signup3({eNo,rDate,vMake,userId,birthDate}) {
    const navigate = useNavigate()
    const [lno,setLno] = useState("")
    const [ino,setIno] = useState("")
    const [isno,setIsno] = useState("")
    const [vcover,setVcover] = useState("")
    const [iprovider,setIprovider] = useState("")
    const [pno,setPno] = useState("")
    const [error,setError] = useState("")

    async function handleClick(e){
        e.preventDefault()
        const data={lno,ino,isno,vcover,iprovider,pno,eno:eNo,vmake:vMake,rdate:rDate,userId,dob:birthDate}
        try{
        const response = await axios.post("http://localhost:5000/user/signup3",data)
        console.log(response.data)
        if(response.data.success){
            navigate("/signup4")
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
            <h5>Document details</h5>
            <div className="input-box">
                <input type="text" placeholder='Licence number' onChange={(e)=>setLno(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Insurance number' onChange={(e)=>setIno(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Insurance scheme number' onChange={(e)=>setIsno(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='vehicle coverage' onChange={(e)=>setVcover(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Insurance provider' onChange={(e)=>setIprovider(e.target.value)}
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Pollution certificate number' onChange={(e)=>setPno(e.target.value)}
                required
                ></input>
            </div>
            <input type='submit' className="submit" value='Submit'
            onClick={handleClick}
            />        </form>
            {error && <p id="err">{error}</p>}
    </div>
    </div>
  )
}

export default Signup3