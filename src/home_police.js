import { useNavigate } from 'react-router-dom';
function Home_police() {
    const navigate =useNavigate()
    function handleOwner(){
        navigate("/police/police_home/police_vehicle/home_police/owner")
    }
    function handleVehicle(){
        navigate("/police/police_home/police_vehicle/home_police/vehicle")
    }
    function handleLicence(){
        navigate("/police/police_home/police_vehicle/home_police/licence")
    }
    function handleInsurance(){
        navigate("/police/police_home/police_vehicle/home_police/insurance")
    }
    function handlePollution(){
        navigate("/police/police_home/police_vehicle/home_police/pollution")
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

export default Home_police