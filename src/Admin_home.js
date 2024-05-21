import { Link } from 'react-router-dom'
import image from './images-removebg-preview.jpg'
import { FcOk } from "react-icons/fc";
import axios from 'axios';
import { useState,useEffect } from 'react';
axios.defaults.withCredentials=true;  

function Admin_home() {

  const [details,setDetails]=useState([])

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
    <div className="complaint">
      <div className="complaint_details">
          <input type="text" value={"hello"}/>
          <input type="text" value={"hello"} />
          <input type="text"  value={"hello"}/>
          <div className='right-wrong'>
          <FcOk className='icons' />
          </div>
        </div>
        <div className="complaint_details_button">
          <Link to={"/transfer_details"}><button>More Details</button></Link>
        </div>
        </div>
               

    </div>
  )
}

export default Admin_home