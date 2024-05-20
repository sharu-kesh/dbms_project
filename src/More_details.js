import React from 'react';

function More_details() {
  return (
    <div className="police_container">
      <div className="form_wrapper">
        <h2>COMPLAINT FORM</h2>
        <form>
          <div className="form_group">
            <label htmlFor="complaint_id">COMPLAINT ID</label>
            <input type="text" id="complaint_id" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="first_name">FIRST NAME</label>
            <input type="text" id="first_name" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="last_name">LAST NAME</label>
            <input type="text" id="last_name" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_reg_no">VEHICLE REGISTRATION NUMBER</label>
            <input type="text" id="vehicle_reg_no" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="phone_no">PHONE NO.</label>
            <input type="tel" id="phone_no" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="email_id">E-MAIL ID</label>
            <input type="email" id="email_id" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="address">ADDRESS</label>
            <textarea id="address" className="policeinput_box"></textarea>
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_lost_date">VEHICLE LOST DATE</label>
            <input type="text" id="vehicle_lost_date" className="policeinput_box" />
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_lost_place">VEHICLE LOST PLACE</label>
            <textarea id="vehicle_lost_place" className="policeinput_box"></textarea>
          </div>

          <div className="form_group">
            <label htmlFor="vehicle_description">VEHICLE DESCRIPTION</label>
            <textarea id="vehicle_description" className="policeinput_box"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default More_details;
