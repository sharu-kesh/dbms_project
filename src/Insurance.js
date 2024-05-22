import { useEffect, useState} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;

export default function Insurance(){
    const [error,setError] = useState("")
  
    const [insuranceDetails,setInsuranceDetails] = useState({
        issue_date:new Date(),
        exp_date:new Date()
    })
    const [isExpired,setIsExpired]=useState(false);
    
       
        useEffect(
            function(){
                async function getInsurance(){
                    try {
                        const respon = await axios.get(`http://localhost:5000/home/insurance`)
                        console.log(respon)
                        setInsuranceDetails(respon.data.data)    
                        const current=new Date();
                        const expiry=new Date(respon.data.data.exp_date)
                        if(expiry<current){
                                setIsExpired(true)
                        }
                        
                    } catch (error) {
                        console.log(error)
                        if (error?.response?.data?.message) {
                            setError(error.response.data.message);
                          } else {
                            setError("Something went wrong! Please try again.");
                          }
                    }
                }
                getInsurance()                
            },[]
        )
        
        
    
    console.log(insuranceDetails)
   
    return(
        <div className="complaintt">
        <div className="complaintForm">
        <div className="complaintTitle">INSURANCE DETAILS</div>
            <div className="complaintTable">
            <table className="t1">
              <thead>FIELDS</thead>
              <tbody>
                    <tr>
                        <label htmlFor="">INSURANCE NUMBER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">INSURANCE SCHEME NUMBER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">INSURANCE PROVIDER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">ISSUE DATE</label>
                    </tr>
                    <tr>
                        <label htmlFor="">EXPIRY DATE</label>
                    </tr>
              </tbody>
            </table>
            <table className="t2">
                <thead>DETAILS</thead>
                <tbody>
                    <tr>
                        <input type="text" value={insuranceDetails.insurance_no} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={insuranceDetails.scheme_no}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={insuranceDetails.ins_provider}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={new Date(insuranceDetails.issue_date).toLocaleDateString()} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={new Date(insuranceDetails.exp_date).toLocaleDateString()} readOnly/>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div >
            {isExpired &&
            (
                <div id="err">Your insurance has expired! Renew it as soon as possible</div>

            )}
        </div>
        </div>
    );
}