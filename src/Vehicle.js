import axios from "axios"
import { useState,useEffect } from "react";
axios.defaults.withCredentials = true;
export default function Vehicle({userId}){
    const [vehicle,setVehicle] = useState({
        registration_date:new Date()
    })
    useEffect(function(){
        async function getVehicle(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/vehicle`)
                setVehicle(respon.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getVehicle()
    },[userId])
    console.log(vehicle)
   const redate=new Date(vehicle.registration_date);
   var dateString=redate.toJSON().split('T')[0];
    return(
        
        <>
        <div className="v">
        <div className="pcontainer">
            <form action="">
                <div className="pinput_box">
            <label htmlFor="rno">Registration Number</label>
            <input type="text"  value={vehicle.registration_no}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="rno">Registration Date</label>
            <input type="text"  value={dateString}/>
            </div>
            <div className="pinput_box"> 
            <label htmlFor="cno">Chassis Number</label>
            <input type="text" value={vehicle.vin}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="vmodel">Vehicle Make</label>
            <input type="text" value={vehicle.vehicle_make}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="ftype">Vehicle Model</label>
            <input type="text" value={vehicle.vehicle_model}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="ftype">Fuel Type</label>
            <input type="text" value={vehicle.fuel_type}/>
            </div>
            </form>
        </div>
        </div>
        </>
    );
}