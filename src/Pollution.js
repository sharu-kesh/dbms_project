import { useEffect, useState} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;

export default function Pollution(){
    const [pollution,setPollution] = useState({
        issue_date:new Date()
    })
    const [expiry,setExpiry]=useState("");
    const [error,setError] = useState("");
    useEffect(
        function(){
            async function getPollution(){
                try {
                    const respon = await axios.get(`http://localhost:5000/home/pollution`)
                    // console.log(respon)
                    setPollution(respon.data.data)
                    setExpiry("hello")
                } catch (error) {
                    console.log(error)
                    if (error?.response?.data?.message) {
                        setError(error.response.data.message);
                      } else {
                        setError("Something went wrong! Please try again.");
                      }
                }
            }
            getPollution()
        },[]
    )
    console.log(pollution)
    return(
        <div className="complaintt">
        <div className="complaintForm">
        <div className="complaintTitle">POLLUTION CERTIFICATE DETAILS</div>
            <div className="complaintTable">
            <table className="t1">
              <thead>FIELDS</thead>
              <tbody>
                    <tr>
                        <label htmlFor="">POLLUTION CERTIFICATE NUMBER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">ISSUE DATE</label>
                    </tr>
                    <tr>
                        <label htmlFor="">VALIDATION</label>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE MAKE</label>
                    </tr>
                    <tr>
                        <label htmlFor="">VEHICLE MODEL</label>
                    </tr>
                    <tr>
                        <label htmlFor="">ENGINE NO.</label>
                    </tr>
              </tbody>
            </table>
            <table className="t2">
                <thead>DETAILS</thead>
                <tbody>
                    <tr>
                        <input type="text" value={pollution.pollution_cer_no} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={new Date(pollution.issue_date).toLocaleDateString()}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={pollution.validation}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={pollution.vehicle_make} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={pollution.vehicle_model} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={pollution.engine_no} readOnly/>
                    </tr>
                </tbody>
            </table>
            </div>
            {expiry && <p id='err'>{expiry}</p>}
        </div>
        </div>
    );
}