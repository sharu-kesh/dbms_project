import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials=true;  
const ComplaintHome = () => {
    const [details,setDetails]=useState([])
  const [error,setError] = useState("")
  const navigate=useNavigate();
  useEffect(
    function()
    {
     async function getComplaintId()
     {  
     try {
         const response = await axios.get("http://localhost:5000/user/home");
         setDetails(response.data.data)        
         }
        catch (error) {
         console.log("An error occurred:");
         console.log(error);
         if (error?.response?.data?.message) {
           setError(error.response.data.message);
         } else {
           setError("Something went wrong! Please try again.");
         }}
       }
       getComplaintId()
    },[] 
 )
 async function handleSubmit(){
    // console.log("onside handle submit",details)
    // console.log(details[0].complaint_id);
    if(details.length===0){
        alert("no history of complaints found till date")
    }
    else{
        navigate(`/home/complaint_home/user_more_details?id=${details[0].complaint_id}`)
    }
 }
  return (
    <div className="outer_button">
      <div className="button_container">
        <Link to="/home/complaint_home/complaint">
          <button>New Complaint</button>
        </Link>
          <button onClick={handleSubmit}>Old Complaint</button>
      </div>
    </div>
  );
};

export default ComplaintHome;
