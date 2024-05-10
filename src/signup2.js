import React from 'react'
import {useNavigate} from "react-router-dom"
function Signup2() {
    const navigate = useNavigate()
  return (
    <div className="wrapper-container">
    <div className="wrapper">
        <form>
            <h1>New Registration</h1>
            <h5>Vehicle details</h5>
            <div className="input-box">
                <input type="text" placeholder='Registration number'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Vehicle model'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='fuel type'
                required
                ></input>
            </div>
            <input type='submit' className="submit" value='Next'
            onClick={()=>navigate("/signup3")}
            />        </form>
    </div>
    </div>
  )
}

export default Signup2