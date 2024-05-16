import React from 'react'
import { Link } from 'react-router-dom'
import image from './images-removebg-preview.jpg'
import police_image from './police.jpeg'
function Police_home() {
  return (
    <div>
        <nav className="nav-bar">
            <p>
            <img src={image} alt="" />
        <h2>Vaahan Website</h2>
        </p>
        <ul>
        <div class="vertical-line"></div>
            <li><Link to="/police_vehicle">Vehicle Details</Link></li>
            <li><Link to="/found">Found Vehicles</Link></li>
            <li><Link to="/lost">Lost Vehicles</Link></li>
            <li><Link to="/">Log Out</Link></li>
        </ul>
    </nav>
    <div className="police_bg">
        <img src={police_image} alt="" />
    </div>
    </div>
  )
}

export default Police_home