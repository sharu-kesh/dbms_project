import { useState,useEffect} from "react"
import axios from "axios"
export default function License({userId}){
    const [licence,setLicence] = useState({
        issue_date:new Date(),
        exp_date:new Date()
    });
    const [expiry,setExpiry]=useState("");
    useEffect(function(){
        async function getLicence(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/licence/${userId}`)
                console.log(respon)
                setLicence(respon.data.data)
                setExpiry("hello")
            } catch (error) {
                console.log(error)
            }
        }
        getLicence()
    },[userId])
    console.log(licence)
   const idate=new Date(licence.issue_date);
   var dateString=idate.toJSON().split('T')[0];
   const exp=new Date(licence.exp_date);
   var expe=exp.toJSON().split('T')[0];
    return(
        <div className="complaintt">
        <div className="complaintForm">
        <div className="complaintTitle">LICENCE DETAILS</div>
            <div className="complaintTable">
            <table className="t1">
              <thead>FIELDS</thead>
              <tbody>
                    <tr>
                        <label htmlFor="">LICENCE NUMBER</label>
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
                        <input type="text" value={licence.licence_no} />
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