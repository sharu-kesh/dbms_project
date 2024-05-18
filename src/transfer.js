import { useNavigate } from 'react-router-dom';
import {useState,useRef} from 'react';
import axios from 'axios';
function Transfer() {
    const [sfname,setSfname]=useState("");
    const [slname,setSlname]=useState("");
    const [sgender,setSgender]=useState("");
    const [sdob,setSdob]=useState("");
    const [saddress,setSaddress]=useState("");
    const [smobile,setSmobile]=useState("");
    const [smail,setSmail]=useState("");
    const [saadhar,setSaadhar]=useState("");
    const [regno,setRegno]=useState("");

    const [bfname,setBfname]=useState("");
    const [blname,setBlname]=useState("");
    const [bgender,setBgender]=useState("");
    const [bdob,setBdob]=useState("");
    const [baddress,setBaddress]=useState("");
    const [bmobile,setBmobile]=useState("");
    const [bmail,setBmail]=useState("");
    const [baadhar,setBaadhar]=useState("");
    const [blno,setBlno]=useState("");

    const [error,setError] = useState("");
    const [success,setSuccess]=useState("")
    const ffname=useRef("");
    const flname=useRef("");
    const fgen=useRef("");
    const fdob=useRef("");
    const fadd=useRef("");
    const fmob=useRef("");
    const fmail=useRef("");
    const faadhar=useRef("");
    const fregno=useRef("");

    const cfname=useRef("");
    const clname=useRef("");
    const cgen=useRef("");
    const cdob=useRef("");
    const cadd=useRef("");
    const cmob=useRef("");
    const cmail=useRef("");
    const caadhar=useRef("");
    const clno=useRef("");

    const navigate = useNavigate()
    async function handleClick(e){
    e.preventDefault()
    const data={sfname,slname,sgender,sdob,saddress,smobile,smail,saadhar,regno,bfname,blname,bgender,bdob,baddress,bmobile,bmail,baadhar,blno};
    try{
    const response = await axios.post("http://localhost:5000/user/complaint",data)
    if(response.data.success){
        ffname.current.value="";
        flname.current.value="";
        fgen.current.value="";
        fmob.current.value="";
        fmail.current.value="";
        fadd.current.value="";
        fdob.current.value="";
        faadhar.current.value="";
        fregno.current.value="";

        cfname.current.value="";
        clname.current.value="";
        cgen.current.value="";
        cmob.current.value="";
        cmail.current.value="";
        cadd.current.value="";
        cdob.current.value="";
        caadhar.current.value="";
        clno.current.value="";


        setSuccess("Your response has been recorded!");
        navigate("/complaint")
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
        <div className="complaintTitle">OWNERSHIP TRANSFER FORM</div>
        <div className="complaintTable">
            <table className='t1'>
                <thead>Details of Seller</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">First Name</label>
                        <input type="text" ref={ffname} placeholder="Enter your first name" onChange={(e)=>setSfname(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text" ref={flname} placeholder="Enter your last name" onChange={(e)=>setSlname(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text" ref={fgen} placeholder='enter gender' onChange={(e)=>setSgender(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="date" ref={fdob} placeholder="date of birth" onChange={(e)=>setSdob(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" ref={fadd} placeholder="address" onChange={(e)=>setSaddress(e.target.value)} required></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text" ref={fmob} placeholder="enter mobile number" onChange={(e)=>setSmobile(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="email" ref={fmail} placeholder="enter email id" onChange={(e)=>setSmail(e.target.value)}required/>
                    </tr>
                    <tr>
                        <label htmlFor="">AADHAR NO.</label>
                        <input type="email" ref={faadhar} placeholder="enter aadhar number" onChange={(e)=>setSaadhar(e.target.value)}required/>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE REGISTRATION NO.</label>
                        <input type="email" ref={fregno} placeholder="enter vehicle registration number" onChange={(e)=>setRegno(e.target.value)}required/>
                    </tr>

                </tbody>
            </table>
            <table className='t2'>
                <thead>Details of Buyer</thead>
                <tbody>
                <tr>
                        <label htmlFor="">First Name</label>
                        <input type="text" ref={cfname} placeholder="Enter your first name" onChange={(e)=>setBfname(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text" ref={clname} placeholder="Enter your last name" onChange={(e)=>setBlname(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text" ref={cgen} placeholder='enter gender' onChange={(e)=>setBgender(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="date" ref={cdob} placeholder="date of birth" onChange={(e)=>setBdob(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" ref={cadd} placeholder="address" onChange={(e)=>setBaddress(e.target.value)} required></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text" ref={cmob} placeholder="enter mobile number" onChange={(e)=>setBmobile(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="email" ref={cmail} placeholder="enter email id" onChange={(e)=>setBmail(e.target.value)}required/>
                    </tr>
                    <tr>
                        <label htmlFor="">AADHAR NO.</label>
                        <input type="email" ref={caadhar} placeholder="enter aadhar number" onChange={(e)=>setBaadhar(e.target.value)}required/>
                    </tr>
                    <tr>
                        <label htmlFor="">LICENCE NO.</label>
                        <input type="email" ref={clno} placeholder="enter licence number" onChange={(e)=>setBlno(e.target.value)}required/>
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

export default Transfer