import { useState,useEffect} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;
export default function License({userId}){
    const [licence,setLicence] = useState({
        issue_date:new Date(),
        exp_date:new Date()
    })
    useEffect(function(){
        async function getLicence(){
            try {
                const respon = await axios.get(`http://localhost:5000/home/licence/${userId}`)
                console.log(respon)
                setLicence(respon.data.data)
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
        <>
        <div className="l">
        <div className="pcontainer">
            <form action="">
                <div className="pinput_box">
            <label htmlFor="lno">Licence Number</label>
            <input type="text" value={licence.licence_no}/>
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