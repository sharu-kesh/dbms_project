import React from 'react'
import {useNavigate} from "react-router-dom"
function Signup3() {
    const navigate = useNavigate()
  return (
    <div className="wrapper-container">
    <div className="wrapper">
        <form>
            <h1>New Registration</h1>
            <h5>Document details</h5>
            <div className="input-box">
                <input type="text" placeholder='Licence number'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Insurance number'
                required
                ></input>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Pollution certificate number'
                required
                ></input>
            </div>
            <input type='submit' className="submit" value='Submit'
            onClick={()=>navigate("/user")}
            />        </form>
    </div>
    </div>
  )
}

export default Signup3