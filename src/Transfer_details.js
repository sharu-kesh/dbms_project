import { useNavigate } from 'react-router-dom';
import {useState,useRef} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
let isFirst = true;
function Transfer_details() {

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
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text" readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text"  readOnly />
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="text"   readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" readOnly></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Aadhar No.</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Vehicle Registration No.</label>
                        <input type="text" readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Chassis No.(LAST 5 DIGITS)</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Insurance No.</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Pollution Certificate No.</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Sold Date</label>
                        <input type="text"  readOnly/>
                    </tr>
                </tbody>
            </table>
            <table className='t2'>
                <thead>Details of Buyer</thead>
                <tbody>
                <tr>
                        <label htmlFor="">First Name</label>
                        <input type="text"   readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Last Name</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <input type="text"   readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea   readOnly></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="text"  readOnly/>
                    </tr>
                    <tr>
                        <label htmlFor="">Aadhar No.</label>
                        <input type="text" readOnly />
                    </tr>
                    <tr>
                        <label htmlFor="">Licence No.</label>
                        <input type="text"  readOnly/>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    </div>
  )
}

export default Transfer_details