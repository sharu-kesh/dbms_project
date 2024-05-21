import { useEffect,useState} from 'react'
import axios from "axios"
axios.defaults.withCredentials = true;

function Owner(){
    const [owner,setOwner] = useState({})
    const [error,setError] = useState("")
useEffect(
    function()
    { 
              async function getOwner(){
                  try {
                      const respon = await axios.get(`http://localhost:5000/home/owner`)
                      console.log(respon)
                      setOwner(respon.data.data)

          
                  } catch (error) {
                      console.log(error)
                      if (error?.response?.data?.message) {
                        setError(error.response.data.message);
                      } else {
                        setError("Something went wrong! Please try again.");
                      }
                  }
              }
     getOwner()
},[]
)
  return (
    <div className="complaintt">
        <div className="complaintForm">
        <div className="complaintTitle">VEHICLE OWNER DETAILS</div>
            <div className="complaintTable">
            <table className="t1">
              <thead>FIELDS</thead>
              <tbody>
                    <tr>
                        <label htmlFor="">NAME</label>
                    </tr>
                    <tr>
                        <label htmlFor="">AGE</label>
                    </tr>
                    <tr>
                        <label htmlFor="">GENDER</label>
                    </tr>
                    <tr>
                        <label htmlFor="">MOBILE NO.</label>
                    </tr>
                    <tr>
                        <label htmlFor="">AADHAR NO.</label>
                    </tr>
                    <tr>
                        <label htmlFor="">E-MAIL ID</label>
                    </tr>
                    <tr>
                        <label htmlFor="">ADDRESS</label>
                    </tr>
              </tbody>
            </table>
            <table className="t2">
                <thead>DETAILS</thead>
                <tbody>
                    <tr>
                        <input type="text" value={owner.fullname} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={12}/>
                    </tr>
                    <tr>
                        <input type="text" value={owner.gender}readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={owner.phone_no} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={owner.aadhar_no} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={owner.email} readOnly/>
                    </tr>
                    <tr>
                        <input type="text" value={owner.address} readOnly/>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div> 
    )
}

export default Owner