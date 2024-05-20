import { Link } from 'react-router-dom'
import image from './images-removebg-preview.jpg'
import { FcOk } from "react-icons/fc";
import wrong from './icons8-cancel-32.png'
import correct from './icons8-correct-32.png'
import axios from "axios"
import { useEffect, useState } from 'react';
axios.defaults.withCredentials = true;


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
        setDetails(response.data)        
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
    <div className="">
      <div className="complaint">
        <div className=""></div>
        <div className="right_wrong"><button><img src={correct} alt="" /></button></div>
        {/* </button><button><img src={wrong} alt="" /> */}
      </div>
      <div className="complaint"></div>
      <div className="complaint"></div>
      <div className="complaint"></div>
      <div className="complaint"></div>
      <div className="complaint"></div>
    </div>
    </div>
  )
}

export default Police_home