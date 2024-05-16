import { useState,useEffect} from "react"
import axios from "axios"
export default function Pollution({userId}){
    const [pollution,setPollution] = useState({
        issue_date:new Date()
    })
    useEffect(function(){
        async function getPollution(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/pollution/${userId}`)
                console.log(respon)
                setPollution(respon.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPollution()
    },[userId])
    console.log(pollution)
   const idate=new Date(pollution.issue_date);
   var dateString=idate.toJSON().split('T')[0];
    return(
        <>
        <div className="p">
        <div className="pcontainer">
            <form action="">
                <div className="pinput_box">
            <label htmlFor="pno">Pollution Certificate Number</label>
            <input type="text" value={pollution.pollution_cer_no}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="IDate">Issue Date</label>
            <input type="text" value={dateString}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="EDate">Validation</label>
            <input type="text" value={pollution.validation}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="Vmake">Vehicle Make</label>
            <input type="text" value={pollution.vehicle_make}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="Vmodel" >Vehicle Model</label>
            <input type="text" value={pollution.vehicle_model}/>
            </div>
            </form>
        </div>
        </div>
        </>
    );
}