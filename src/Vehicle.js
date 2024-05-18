import axios from "axios"
import { useState } from "react";
axios.defaults.withCredentials = true;
let isFirst = true;
export default function Vehicle({userId}){
    const [vehicle,setVehicle] = useState({
        registration_date:new Date()
    });
    
        async function getVehicle(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/vehicle`)
                setVehicle(respon.data.data)
                isFirst = false;
            } catch (error) {
                console.log(error)
            }
        }
        if(isFirst)
        getVehicle()
    
    console.log(vehicle)
   const redate=new Date(vehicle.registration_date);
   var dateString=redate.toJSON().split('T')[0];
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
                        <input type="text" value={vehicle.registration_no} />
                    </tr>
                    <tr>
                        <input type="text" value={dateString}/>
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.vehicle_make}/>
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.vehicle_model} />
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.vin} />
                    </tr>
                    <tr>
                        <input type="text" value={vehicle.fuel_type} />
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}