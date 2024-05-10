import React from 'react'
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Admin() {
  return (
    <div className="wrapper-container">
    <div className='wrapper'>
        <form >
            <h1>Admin</h1>
            <div className="input-box">
                <input type="text" 
                placeholder='Username' name='username'
                required />
                <FaUser className='icon'/>
            </div>
            {/* <div className="input-box">
                <input type="email" placeholder='email' required />
                <MdEmail className='icon'/>
            </div> */}
            <div className="input-box">
                <input type="password" 
                placeholder='Password' name='password' 
                required />
                <FaLock className='icon'/>
            </div>
            {/* <div className="remember-forgot">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password</a>
            </div> */}
            <input type='submit' className="submit" value='Login'
            />
        </form>
    </div>
    </div>
  )
}

export default Admin