import React from 'react'
import { useState } from 'react'
import bike from "./new.jpg"
import Card from "./Card"
import Police_nav from './police_nav'
import img1 from './v-licence-registration-details.png'
import img2 from './v-pucc-icon.png'
import img3 from './v-learners-license-services.png'
import img4 from './v-permit-services.png'
import img5 from './v-homologation.png'
function Home_police() {
  return (
    <div>
         <Police_nav />
        <div className="image">
            <img src={bike} alt=""></img>
        </div>
        <div className="services">
             <h2>Services</h2>
             <p>Various services related to registration of vehicle, Vehicle Status, Licence status, Insurance  etc.</p>
             </div>
        <div className="card-card">
        <Card imageUrl={img1} title={"Vehicle Details"} text={"Check details about vehicle"} page="/Vehicle" />
        <Card imageUrl={img2} title={"PUCC"} text={"Check whether vehicle is under pollution control"} page="/Pollution"/>
        <Card imageUrl={img3} title={"License"} text={"Get your license details online"} page="/License" />
        <Card imageUrl={img4} title={"Insurance"} text={"Check about vehicle's insurance"} page={"/Insurance"} />
        <Card imageUrl={img5} title={"Owner Details"} text={"Check for owner's details"} page={"/Owner"} />
        </div>
        <div className="news-container">
            <div className="safe">
                Safety Tips
            </div>
            <ul>
                <li>
                    Wear Helmet
                </li>
                <li>Don't drink and drive</li>
                <li>Always wear your seat belt</li>
                <li>Avoid over-speeding</li>
                <li>Don't drive your vehicles in pathway</li>
                <li>Follow traffic signals</li>
            </ul>
        </div>
    </div>
  )
}

export default Home_police