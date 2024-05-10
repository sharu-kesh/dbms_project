import React from 'react'

function Update() {
  return (
<div className="u">
        <div className="pcontainer">
            <form action="">
                <div className="pinput_box">
            <label htmlFor="cno">Old Contact Number</label>
            <input type="text" />
            </div>
            <div className="pinput_box">
            <label htmlFor="ncno">New Contact Number</label>
            <input type="text" />
            </div>
            <div className="pinput_box">
            <label htmlFor="email">Old Email</label>
            <input type="email" />
            </div>
            <div className="pinput_box">
            <label htmlFor="nemail">New Email</label>
            <input type="email" />
            </div>
            <div className="pinput_box">
            <label htmlFor="naddress">New Address</label>
            <input type="text" />
            </div>
            <button type='submit' className="submit">Submit</button>
            </form>
        </div>
        </div>  )
}

export default Update