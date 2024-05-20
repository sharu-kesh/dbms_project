import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function More_details() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id")
  const [error,setError] = useState("")
  const [complaint, setComplaint] = useState({
    complaint_id: "",
    vehicle_status: "",
    vehicle_lost_date: "",
    vehicle_found_date: "",
    station_id: "",
    user_id:"",
    vehicle_lost_place: "",
    vehicle_description: "",
    full_name: "",
    phone_no: "",
    age: "",
    address: "",
    aadhar_no: "",
    gender: "",
    email: "",
    registration_no: "",
    fuel_type: "",
    vin: "",
    vehicle_make: "",
    vehicle_model: "",
  })

  useEffect(function(){
    async function getComplaint(){
      try{
        const response = await axios.get(`http://localhost:5000/police/home/${id}`)
        console.log(response.data)
        if(response.data.success){
            setComplaint(response.data.data)
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
    getComplaint();
  },[id])
  return (
    <div className="police_container">
      <div className="form_wrapper">
      {error && <p id="err">{error}</p>}
        <h2>COMPLAINT FORM</h2>
        <form>
          <div className="form_group">
            <label htmlFor="complaint_id">COMPLAINT ID</label>
            <input readOnly type="text" id="complaint_id" className="policeinput_box" value={complaint.complaint_id}/>
          </div>

          <div className="form_group">
            <label htmlFor="first_name">FIRST NAME</label>
            <input readOnly type="text" id="first_name" className="policeinput_box" value={complaint.full_name}/>
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_reg_no">VEHICLE REGISTRATION NUMBER</label>
            <input readOnly type="text" id="vehicle_reg_no" className="policeinput_box" value={complaint.registration_no}/>
          </div>

          <div className="form_group">
            <label htmlFor="phone_no">PHONE NO.</label>
            <input readOnly type="tel" id="phone_no" className="policeinput_box" value={complaint.phone_no}/>
          </div>

          <div className="form_group">
            <label htmlFor="email_id">E-MAIL ID</label>
            <input readOnly type="email" id="email_id" className="policeinput_box" value={complaint.email}/>
          </div>

          <div className="form_group">
            <label htmlFor="address">ADDRESS</label>
            <textarea id="address" className="policeinput_box" value={complaint.address}></textarea>
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_lost_date">VEHICLE LOST DATE</label>
            <input readOnly type="text" id="vehicle_lost_date" className="policeinput_box" value={new Date(complaint.vehicle_lost_date).toLocaleDateString()} />
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_lost_place">VEHICLE LOST PLACE</label>
            <textarea id="vehicle_lost_place" className="policeinput_box" value={complaint.vehicle_lost_place}></textarea>
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_description">VEHICLE DESCRIPTION</label>
            <textarea id="vehicle_description" className="policeinput_box" value={complaint.vehicle_description}></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default More_details;
