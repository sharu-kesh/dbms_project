import { useNavigate } from 'react-router-dom';
function Home_admin() {
    const navigate =useNavigate()
    function handleOwner(){
        navigate("/admin/admin_home/admin_vehicle/home_admin/owner")
    }
    function handleVehicle(){
        navigate("/admin/admin_home/admin_vehicle/home_admin/vehicle")
    }
    function handleLicence(){
        navigate("/admin/admin_home/admin_vehicle/home_admin/licence")
    }
    function handleInsurance(){
        navigate("/admin/admin_home/admin_vehicle/home_admin/insurance")
    }
    function handlePollution(){
        navigate("/admin/admin_home/admin_vehicle/home_admin/pollution")
    }
  return (
    <div className="div">
    <div className='police_div'>
        <div className="police_check">
            Select the field you want to check
        </div>
        <div className="police_field">
            <button onClick={handleOwner}>Owner's Details</button>
            <button onClick={handleVehicle}>Vehicle's Details</button>
            <button onClick={handleLicence}>Licence Details</button>
            <button onClick={handleInsurance}>Insurance Details</button>
            <button onClick={handlePollution}>Pollution Certificate</button>
            
        </div>
        </div>
    </div>
  )
}

export default Home_admin