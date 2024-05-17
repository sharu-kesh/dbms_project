function Complaint() {
  return (
    <div className="complaintt">
    <div className="complaintForm">
        <div className="complaintTitle">COMPLAINT REGISTRATION FORM</div>
        <div className="complaintTable">
            <table>
                <thead>Details of Complaint</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter your name" required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Gender</label>
                        <select name="SELECT GENDER" id="">
                            <option value="">MALE</option>
                            <option value="">FEMALE</option>
                            <option value="">OTHERS</option>
                        </select>
                    </tr>
                    <tr>
                        <label htmlFor=""> Date of Birth</label>
                        <input type="date" placeholder="date of birth" required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Address</label>
                        <textarea name="" id="" placeholder="address" required></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Mobile No.</label>
                        <input type="text"  placeholder="enter mobile number" required/>
                    </tr>
                    <tr>
                        <label htmlFor="">E-Mail ID</label>
                        <input type="email" placeholder="enter email id" required/>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>Details of Complaint</thead>
                <tbody>
                    <tr>
                        <label htmlFor="">Subject</label>
                        <select name="" id="">
                            <option value="">VEHICLE MISSING/THEFT</option>
                        </select>
                    </tr>
                    <tr>
                        <label htmlFor="">Date of Occurence</label>
                        <input type="date" placeholder="date of missing" required/>
                    </tr>
                    <tr>
                        <label htmlFor="">Place of Occurence</label>
                        <textarea name="" id="" placeholder="Place of Occurence (Max.200 characters allowed)"></textarea>
                    </tr>
                    <tr>
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" placeholder="Complaint Description (Max.200 characters allowed)"></textarea>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="complaintButton">
        <button type="submit">Register</button>
        </div>
        
    </div>
    </div>
  )
}

export default Complaint