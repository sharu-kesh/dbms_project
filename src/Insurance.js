import { useState,useEffect} from "react"
import axios from "axios"
export default function Insurance({userId}){
    const [insurance,setInsurance] = useState({
        issue_date:new Date(),
        exp_date:new Date()
    })
    const [expiry,setExpiry]=useState("");
    useEffect(function(){
        async function getInsurance(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/insurance/${userId}`)
                console.log(respon)
                setInsurance(respon.data.data)
                setExpiry("hello")
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
                        <input type="text" value={insurance.insurance_no} />
                    </tr>
                    <tr>
                        <input type="text" value={insurance.scheme_no}/>
                    </tr>
                    <tr>
                        <input type="text" value={insurance.ins_provider}/>
                    </tr>
                    <tr>
                        <input type="text" value={dateString} />
                    </tr>
                    <tr>
                        <input type="text" value={expe} />
                    </tr>
                </tbody>
            </table>
            </div>
            {expiry && <p id='err'>{expiry}</p>}
        </div>
        </div>
    );
}