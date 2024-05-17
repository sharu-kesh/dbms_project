import Nav from './nav'
import Home from "./Home"
import Vehicle from "./Vehicle"
import About from "./About"
import Login from "./loginhome"
import User from './User'
import Police from './Police'
import Home1 from './Home1'
import Insurance from './Insurance'
import Pollution from './Pollution'
import Admin from './Admin'
import Signup1 from './signup1'
import Signup2 from './signup2'
import Signup3 from './signup3'
import Signup4 from './signup4'
import Transfer from './transfer'
import License from './License'
import Owner from './owner'
import Update from './update'
import Police_home from './police_home'
import Police_vehicle from './police_vehicle'
import Home_police from './home_police'
import Found from './found'
import Lost from './lost'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from 'react'
function App() {
  const [userId,setUserId] = useState(null); 
  const [eNo,setENo] = useState(""); 
  const [rDate, setRDate] = useState(null);
  const [vMake,setVMake] = useState("");
  const [emailAddress, setEmailAddress] = useState("") 
  const [birthDate,setBirthDate] = useState(null)
  const [vrno,setVrno]=useState("")

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/vehicle" element={<Vehicle/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/insurance" element={<Insurance userId={userId}/>}/>
      <Route path="/pollution" element={<Pollution userId={userId}/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/police" element={<Police/>}/>
      <Route path="/user" element={<User setUserId={setUserId}/>}/>
      <Route path="/home1" element={<Home1/>}/>
      <Route path="/signup1" element={<Signup1 setUserId={setUserId} setEmailAddress={setEmailAddress} setBirthDate={setBirthDate}/>}/>
      <Route path="/signup2" element={<Signup2 userId={userId} setENo={setENo} setRDate={setRDate} setVMake={setVMake}/>}/>
      <Route path="/signup3" element={<Signup3 userId={userId} eNo={eNo} rDate={rDate} vMake={vMake} birthDate={birthDate}/>}/>
      <Route path="/signup4" element={<Signup4 userId={userId} emailAddress={emailAddress}/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
      <Route path="/license" element={<License userId={userId}/>}/>
      <Route path="/owner" element={<Owner userId={userId}/>}/>
      <Route path="/update" element={<Update userId={userId}/>}/>
      <Route path="/police_home" element={<Police_home/>}/>
      <Route path="/police_vehicle" element={<Police_vehicle/>}/>
      <Route path="/home_police" element={<Home_police/>}/>
      <Route path="/found" element={<Found/>}/>
      <Route path="/lost" element={<Lost/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
