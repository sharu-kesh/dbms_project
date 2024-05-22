import { useNavigate, useParams } from 'react-router-dom';
import {useState,useRef, useEffect} from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
axios.defaults.withCredentials = true;

function Transfer_details() {
    const [error,setError] = useState("")
    const { id } = useParams();
    console.log(id)
    const [details,setDetails] = useState([])
    useEffect(
        function(){
            async function getQuery(){
                try {
                    const response = await axios.post("http://localhost:5000/admin/homedetails",{transferId:id})
                    console.log(response.data.data)
                    setDetails(response.data.data[0])
                } catch (error) {
                    console.log("here")
                console.log(error);
            if (error?.response?.data?.message)
                setError(error?.response?.data?.message);
            else setError("Something went wrong! Please try again.");
                }
            }
            getQuery()
        },[]
    )
    console.log(details);
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
                        <input type="text"  value ={details.sfname} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value ={details.slname} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text"  value ={details.sgender} readOnly />
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="text"  value ={details.sdob} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" value ={details.saddress} readOnly></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text"  value ={details.sphone_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="text" value ={details.semail} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Aadhar No.</label>
                        <input type="text"  value ={details.saadhar_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Vehicle Registration No.</label>
                        <input type="text" value ={details.registration_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Chassis No.(LAST 5 DIGITS)</label>
                        <input type="text" value ={details.chassis_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Insurance No.</label>
                        <input type="text"  value ={details.insurance_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Pollution Certificate No.</label>
                        <input type="text" value ={details.pollution_cer_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Sold Date</label>
                        <input type="text" value ={details.sold_date} readOnly/>
                    </tr>
                </tbody>
            </table>
            <table className='t2'>
                <thead>Details of Buyer</thead>
                <tbody>
                <tr>
                        <label htmlFor="">First Name</label>
                        <input type="text" value ={details.bfname}  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value ={details.blname} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text"  value ={details.bgender} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="text" value ={details.bdob} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea value ={details.baddress}  readOnly></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text" value ={details.bphone_no} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="text" value ={details.bemail} readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Aadhar No.</label>
                        <input type="text" value ={details.baadhar_no} readOnly />
                    </tr>
                    <tr>
                        <label htmlFor="">Licence No.</label>
                        <input type="text" value ={details.blicence_no} readOnly/>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    </div>
  )
}

export default Transfer_details