import axios from "axios"
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true;
export default function Vehicle({userId}){
    const [error,setError] = useState("")
    const [vehicle,setVehicle] = useState({
        registration_date:new Date()
    });
useEffect(
    function()
    {
        async function getVehicle(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/vehicle`)
                setVehicle(respon.data.data)
            } catch (error) {
                console.log(error)
                if (error?.response?.data?.message) {
                    setError(error.response.data.message);
                  } else {
                    setError("Something went wrong! Please try again.");
                  }
            }
        }
        getVehicle()
    },[]
)    
    console.log(vehicle)
    return(
        <div className="complaintt">
        <div className="complaintForm">
        <div className="complaintTitle">VEHICLE DETAILS</div>
            <div className="complaintTable">
            <table className="t1">
              <thead>FIELDS</thead>
              <tbody>
                    <tr>
                        <label htmlFor="">VEHICLE REGISTRATION NUMBER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE REGISTRATION DATE</label>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE MAKE</label>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE MODEL</label>
                    </tr>
                    <tr>
                        <label htmlFor="">CHASSIS NUMBER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">FUEL TYPE</label>
                    </tr>
              </tbody>
            </table>
            <table className="t2">
                <thead>DETAILS</thead>
                <tbody>
                    <tr>
                        <input type="text" value={vehicle.registration_no} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={new Date(vehicle.registration_date).toLocaleDateString()}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.vehicle_make}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.vehicle_model} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.vin} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.fuel_type} readOnly/>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}