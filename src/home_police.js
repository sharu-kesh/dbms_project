import { useNavigate } from 'react-router-dom';
function Home_police() {
    const navigate =useNavigate()
    function handleOwner(){
        navigate("/owner")
    }
    function handleVehicle(){
        navigate("/Vehicle")
    }
    function handleLicence(){
        navigate("/License")
    }
    function handleInsurance(){
        navigate("/Insurance")
    }
    function handlePollution(){
        navigate("/Pollution")
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