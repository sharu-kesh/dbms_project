import { useState,useEffect} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;
export default function Insurance({userId}){
    const [insurance,setInsurance] = useState({
        issue_date:new Date(),
        exp_date:new Date()
    })
    useEffect(function(){
        async function getInsurance(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/insurance`)
                console.log(respon)
                setInsurance(respon.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getInsurance()
    },[userId])
    console.log(insurance)
   const idate=new Date(insurance.issue_date);
   var dateString=idate.toJSON().split('T')[0];
   const exp=new Date(insurance.exp_date);
   var expe=exp.toJSON().split('T')[0];
    return(
        <>
        <div className="i">
        <div className="pcontainer">
            <form action>
                <div className="pinput_box">
            <label htmlFor="ino">Insurance Number</label>
            <input type="text" value={insurance.insurance_no}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="isno">Insurance Scheme Number</label>
            <input type="text" value={insurance.scheme_no}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="ipro">Insurance Provider</label>
            <input type="text" value={insurance.ins_provider}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="IDate">Issue Date</label>
            <input type="text" value={dateString}/>
            </div>
            <div className="pinput_box">
            <label htmlFor="EDate">Expiry Date</label>
            <input type="text" value={expe}/>
            </div>
            </form>
        </div>
        </div>
        
        
        
        </>
    );
}