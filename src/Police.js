import React from 'react'
import './login.css'
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Police(){
  return (
    <div className="wrapper-container">
    <div className='wrapper'>
        <form action="">
            <h1>Police-Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Station id' required />
                <FaUser className='icon'/>
            </div>
            {/* <div className="input-box">
                <input type="email" placeholder='email' required />
                <MdEmail className='icon'/>
            </div> */}
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>
            {/* <div className="remember-forgot">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password</a>
            </div> */}
            <input type='submit' className="submit" value="Login" />
        </form>
    </div>
    </div>
  )
}
