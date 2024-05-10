import React from 'react'
import {useNavigate} from "react-router-dom"
function Signup1() {
    const navigate = useNavigate()
  return (
    <div className="wrapper-container">
    <div className="wrapper">
        <form>
            <h1>New Registration</h1>
            <h5>Personal details</h5>
            <div className="input-box">
                <input type="text" placeholder='name'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='gender'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="" placeholder='phone number'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='address'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="email" placeholder='email'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='aadhar'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="date" placeholder='dob'
                required
                ></input>
            </div>
            <input type='submit' className="submit" value='Next'
            onClick={()=>navigate("/signup2")}
            />        </form>
    </div>
    </div>
  )
}

export default Signup1