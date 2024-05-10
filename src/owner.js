import React from 'react'

function Owner() {
  return (
<>
        <div className="o">
        <div className="pcontainer">
            <form action="">
                <div className="vinput_box">
            <label htmlFor="name">Name</label>
            <input type="text" />
            </div>
            <div className="vinput_box">
            <label htmlFor="bdDate">Age</label>
            <input type="text" />
            </div>
            <div className="vinput_box">
            <label htmlFor="gender">Gender</label>
            <input type="text" />
            </div>
            <div className="vinput_box">
            <label htmlFor="phone">Contact</label>
            <input type="text" />
            </div>
            <div className="vinput_box">
            <label htmlFor="aadhar">Aadhar</label>
            <input type="text" />
            </div>
            <div className="vinput_box">
            <label htmlFor="email">Email</label>
            <input type="email" />
            </div>
            <div className="vinput_box">
            <label htmlFor="address">Address</label>
            <input type="text" />
            </div>
            </form>
        </div>
        </div>
        </>  )
}

export default Owner