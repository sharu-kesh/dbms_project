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

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from 'react'
function App() {
  const [userId,setUserId] = useState(null); 
  const [eNo,setENo] = useState(""); 
  const [rDate, setRDate] = useState(null);
  const [vMake,setVMake] = useState("");
  const [emailAddress, setEmailAddress] = useState("") 
  const [birthDate,setBirthDate] = useState(null)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/vehicle" element={<Vehicle userId={userId}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/insurance" element={<Insurance/>}/>
      <Route path="/pollution" element={<Pollution/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/police" element={<Police/>}/>
      <Route path="/user" element={<User setUserId={setUserId}/>}/>
      <Route path="/home1" element={<Home1/>}/>
      <Route path="/signup1" element={<Signup1 setUserId={setUserId} setEmailAddress={setEmailAddress} setBirthDate={setBirthDate}/>}/>
      <Route path="/signup2" element={<Signup2 userId={userId} setENo={setENo} setRDate={setRDate} setVMake={setVMake}/>}/>
      <Route path="/signup3" element={<Signup3 userId={userId} eNo={eNo} rDate={rDate} vMake={vMake} birthDate={birthDate}/>}/>
      <Route path="/signup4" element={<Signup4 userId={userId} emailAddress={emailAddress}/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
      <Route path="/license" element={<License/>}/>
      <Route path="/owner" element={<Owner/>}/>
      <Route path="/update" element={<Update/>}/>




    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
