import { useNavigate } from 'react-router-dom';
import {useState,useRef} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
function Complaint() {
    const [cname,setCname]=useState("");
    const [gender,setGender]=useState("");
    const [dob,setDob]=useState("");
    const [address,setAddress]=useState("");
    const [mobile,setMobile]=useState("");
    const [mail,setMail]=useState("");
    const [mdate,setMdate]=useState("");
    const [place,setPlace]=useState("");
    const [descr,setDescr]=useState("");
    const [error,setError] = useState("");
    const [success,setSuccess]=useState("")
    const fname=useRef("");
    const fgen=useRef("");
    const fdob=useRef("");
    const fadd=useRef("");
    const fmob=useRef("");
    const fmail=useRef("");
    const fmdate=useRef("");
    const fplace=useRef("");
    const fdescr=useRef("");

    const navigate = useNavigate()
    async function handleClick(e){
    e.preventDefault()
    const data={cname,gender,dob,address,mobile,mail,mdate,place,descr};
    try{
    const response = await axios.post("http://localhost:5000/user/complaint",data)
    if(response.data.success){
        fname.current.value="";
        fgen.current.value="";
        fdescr.current.value="";
        fmob.current.value="";
        fmail.current.value="";
        fplace.current.value="";
        fadd.current.value="";
        fdob.current.value="";
        fmdate.current.value="";

        setSuccess("Your response has been recorded!");
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
        <div className="complaintTitle">COMPLAINT REGISTRATION FORM</div>
        <div className="complaintTable">
            <table className='t1'>
                <thead>Details of Complaint</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">Name</label>
                        <input type="text" ref={fname} placeholder="Enter your name" onChange={(e)=>setCname(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text" ref={fgen} placeholder='enter gender' onChange={(e)=>setGender(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="date" ref={fdob} placeholder="date of birth" onChange={(e)=>setDob(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" ref={fadd} placeholder="address" onChange={(e)=>setAddress(e.target.value)} required></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text" ref={fmob} placeholder="enter mobile number" onChange={(e)=>setMobile(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="email" ref={fmail} placeholder="enter email id" onChange={(e)=>setMail(e.target.value)}required/>
                    </tr>
                </tbody>
            </table>
            <table className='t2'>
                <thead>Details of Complaint</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">Subject</label>
                        <select name="" id="">
                            <option value="">VEHICLE MISSING/THEFT</option>
                        </select>
                    </tr>
                    <tr>
                        <label htmlFor="">Date of Occurence</label>
                        <input type="date" ref={fmdate} placeholder="date of missing" onChange={(e)=>setMdate(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Place of Occurence</label>
                        <textarea name="" id=""ref={fplace} placeholder="Place of Occurence (Max.200 characters allowed)" onChange={(e)=>setPlace(e.target.value)}></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" ref={fdescr} placeholder="Complaint Description (Max.200 characters allowed)" onChange={(e)=>setDescr(e.target.value)}></textarea>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="complaintButton">
        <button type="submit" onClick={handleClick}>Register</button>
        </div>
        {error && <p id="err">{error}</p>}
        {success && <p id='succ'>{success}</p>}
        
    </div>
    </div>
  )
}

export default Complaint