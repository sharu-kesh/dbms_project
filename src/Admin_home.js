import { Link } from 'react-router-dom'
import image from './images-removebg-preview.jpg'
import { FcOk } from "react-icons/fc";
import axios from 'axios';
import { useState,useEffect, useCallback } from 'react';
axios.defaults.withCredentials=true;  

function Admin_home() {

  const [details,setDetails]=useState([])
  const [error,setError] = useState("")

  const loadTranferId = useCallback(async () => {
      try {
          const response = await axios.get("http://localhost:5000/admin/home");
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
  },[])


useEffect(
   function(){ 
      loadTranferId();
   },[loadTranferId] 
)
console.log(details)
async function updateDetails(userId,email,fname,lname,phone_no,dob,address,aadhar_no,gender) {
  try {
    const response = await axios.post("http://localhost:5000/admin/transfer/update", [userId,email,fname,lname,phone_no,dob,address,aadhar_no,gender]);
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
            <li><Link to="/admin/admin_home/admin_vehicle">Vehicle Details</Link></li>
            <li><Link to="/">Log Out</Link></li>
        </ul>
    </nav>
    {console.log(details)}
    { details.map(item=>{
    console.log(new Date(item.verify_date).toDateString())
    if(!item.verify_date)
      return(<div className="complaint" key = {item.transfer_id}>
      <div className="complaint_details">
          <input type="text" value={item.transfer_id}/>
          <input type="text" value={item.sfullname} />
          <input type="text"  value={item.bfullname}/>
          <input type="text"  value={item.registration_no}/>
          <div className='right-wrong'>
          <FcOk className='icons' onClick={() => updateDetails(item.user_id,item.bemail,item.bfname,item.blname,item.bphone_no,item.bdob,item.baddress,item.baadhar_no,item.bgender)} />
          </div>
        </div>
        <div className="complaint_details_button">
          <Link to={`/transfer_details/${item.transfer_id}`}><button>More Details</button></Link>
        </div>
        </div>)
      })
    } 
    
       

</div>
  )
}

export default Admin_home