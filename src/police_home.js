import { Link } from 'react-router-dom'
import image from './images-removebg-preview.jpg'
import { FcOk } from "react-icons/fc";
import axios from 'axios';
import { useState,useEffect } from 'react';
axios.defaults.withCredentials=true;  

function Police_home() {

  const [details,setDetails]=useState([])
  const [error,setError] = useState("")


useEffect(
   function()
   {
    async function getComplaintId()
    {  
    try {
        const response = await axios.get("http://localhost:5000/police/home");
        console.log(response.data)
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
console.log(details)
async function updateComplaint(complaintId) {
  try {
    const response = await axios.post("http://localhost:5000/police/complaint/update", { complaint_id: complaintId });
    console.log(response.data);
    window.location.reload(false);
  } catch (error) {
    console.log("An error occurred while updating the complaint:");
    console.log(error);
    if (error?.response?.data?.message) {
      setError(error.response.data.message);
    } else {
      setError("Something went wrong! Please try again.");
    }
  }
}

  return (
    <div>
        <nav className="nav-bar">
            <p>
            <img src={image} alt="" />
        <h2>Vaahan Website</h2>
        </p>
        <ul>
        <div class="vertical-line"></div>
            <li><Link to="/police/police_home/police_vehicle">Vehicle Details</Link></li>
            <li><Link to="/">Log Out</Link></li>
        </ul>
    </nav>
    {details.map( item=>{
      console.log(new Date(item.vehicle_found_date).toDateString())
      if(!item.vehicle_found_date)
      return(<div className="complaint" key={item.complaint_id}>
      <div className="complaint_details">
          <input type="text" value={item.complaint_id}/>
          <input type="text" value={item.registration_no} />
          <input type="text"  value={item.full_name}/>
          <div className='right-wrong'>
          <FcOk className='icons' onClick={() => updateComplaint(item.complaint_id)} />
          </div>
        </div>
        <div className="complaint_details_button">
          <Link to={`more_details?id=${item.complaint_id}`}><button>More Details</button></Link>
        </div>
        </div>)
    })}
               

    </div>
  )
}

export default Police_home