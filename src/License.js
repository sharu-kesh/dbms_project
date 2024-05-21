import { useState,useEffect} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;
export default function License(){
    const [error,setError] = useState("")
    const [licence,setLicence] = useState({
        issue_date:new Date(),
        exp_date:new Date()
    });
    const [expiry,setExpiry]=useState("");
    useEffect(function(){
        async function getLicence(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/licence`)
                console.log(respon)
                setLicence(respon.data.data)
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
        getLicence()
    },[])

    console.log(licence)
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
                        <input type="text" value={licence.licence_no} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={new Date(licence.issue_date).toLocaleDateString()} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={new Date(licence.exp_date).toLocaleDateString()} readOnly/>
                    </tr>
                </tbody>
            </table>
            </div>
            {expiry && <p id='err'>{expiry}</p>}
        </div>
        </div>
    );
}