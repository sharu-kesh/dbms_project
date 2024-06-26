import { useNavigate } from 'react-router-dom';
import {useState,useRef, useEffect} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
function Transfer() {
    const [owner,setOwner] = useState({
        dob:new Date()
    })

useEffect(
    function(){
        async function getOwner(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/transfer/owner`)
                console.log(respon)
                setOwner(respon.data.data)
                // console.log(owner.fullname)
    
            } catch (error) {
                console.log(error)
                if (error?.response?.data?.message)
                    setError(error?.response?.data?.message);
                  else setError("Something went wrong! Please try again.");
            }
        }
        getOwner()
    },[]
)
    const dateof=new Date(owner.dob)
    dateof.setDate(dateof.getDate() + 1);
    const dateofbirth=dateof.toJSON().split('T')[0];
    const [chano,setChano]=useState("")
    const [bfname,setBfname]=useState("");
    const [blname,setBlname]=useState("");
    const [bgender,setBgender]=useState("");
    const [bdob,setBdob]=useState("");
    const [baddress,setBaddress]=useState("");
    const [bmobile,setBmobile]=useState("");
    const [bmail,setBmail]=useState("");
    const [baadhar,setBaadhar]=useState("");
    const [blno,setBlno]=useState("");
    const [sdate,setSdate]=useState("")

    const [error,setError] = useState("");
    const ffname=useRef("");
    const flname=useRef("");
    const fgen=useRef("");
    const fdob=useRef("");
    const fadd=useRef("");
    const fmob=useRef("");
    const fmail=useRef("");
    const faadhar=useRef("");
    const fregno=useRef("");
    const fsdate=useRef("");


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
    const data={sregno:owner.registration_no,sfname:owner.fname,slname:owner.lname,sdob:owner.dob,sgender:owner.gender,smobile:owner.phone_no,saadhar_no:owner.aadhar_no,smail:owner.email,saddress:owner.address,chano,bfname,blname,bdob,bgender,bmobile,baadhar,bmail,baddress,blno,sdate};
    console.log(data)
    try{
    const response = await axios.post("http://localhost:5000/home/transfer",data)
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
        fsdate.current.value="";

        cfname.current.value="";
        clname.current.value="";
        cgen.current.value="";
        cmob.current.value="";
        cmail.current.value="";
        cadd.current.value="";
        cdob.current.value="";
        caadhar.current.value="";
        clno.current.value="";


        alert("Your response has been recorded!");
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
        <div className="complaintTitle">OWNERSHIP TRANSFER FORM</div>
        <div className="complaintTable">
            <table className='t1'>
                <thead>Details of Seller</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">First Name</label>
                        <input type="text" ref={ffname} value={owner.fname} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text" ref={flname}  value={owner.lname}readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text" ref={fgen} value={owner.gender}readOnly />
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="text" ref={fdob} value={dateofbirth}readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" ref={fadd} value={owner.address}readOnly></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text" ref={fmob}  value={owner.phone_no}readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="text" ref={fmail} value={owner.email} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">AADHAR NO.</label>
                        <input type="text" ref={faadhar} value={owner.aadhar_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE REGISTRATION NO.</label>
                        <input type="text" ref={fregno} value={owner.registration_no}readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">CHASSIS NO.(LAST 5 DIGITS)</label>
                        <input type="text" ref={fregno} onChange={(e)=>setChano(e.target.value)} required/>
                    </tr>
                    <tr>
                        <label htmlFor="">SOLD DATE</label>
                        <input type="date" ref={fsdate} onChange={(e)=>setSdate(e.target.value)} required/>
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
                        <input type="text" ref={caadhar} placeholder="enter aadhar number" onChange={(e)=>setBaadhar(e.target.value)}required/>
                    </tr>
                    <tr>
                        <label htmlFor="">LICENCE NO.</label>
                        <input type="text" ref={clno} placeholder="enter licence number" onChange={(e)=>setBlno(e.target.value)}required/>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="complaintButton">
        <button type="submit" onClick={handleClick}>Register</button>
        </div>
        {error && <p id="err">{error}</p>}        
    </div>
    </div>
  )
}

export default Transfer