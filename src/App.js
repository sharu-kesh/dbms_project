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
import Complaint from "./complaint"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from 'react'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/home/vehicle" element={<Vehicle/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home/complaint" element={<Complaint/>}/>
      <Route path="/home/insurance" element={<Insurance />}/>
      <Route path="/home/pollution" element={<Pollution />}/>
      <Route path="/police" element={<Police/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/home1" element={<Home1/>}/>
      <Route path="/user/signup1" element={<Signup1 />}/>
      <Route path="/user/signup1/signup2" element={<Signup2 />}/>
      <Route path="/user/signup1/signup2/signup3" element={<Signup3 />}/>
      <Route path="/user/signup1/signup2/signup3/signup4" element={<Signup4 />}/>
      <Route path="/home/transfer" element={<Transfer/>}/>
      <Route path="/home/license" element={<License />}/>
      <Route path="/home/owner" element={<Owner />}/>
      <Route path="/home/update" element={<Update/>}/>
      <Route path="/police/police_home" element={<Police_home/>}/>
      <Route path="/police/police_home/police_vehicle" element={<Police_vehicle/>}/>
      <Route path="/police/police_home/police_vehicle/home_police" element={<Home_police/>}/>
      <Route path="/police/police_home/police_vehicle/home_police/vehicle" element={<Vehicle/>}/>
      <Route path="/police/police_home/police_vehicle/home_police/owner" element={<Owner/>}/>
      <Route path="/police/police_home/police_vehicle/home_police/licence" element={<License/>}/>
      <Route path="/police/police_home/police_vehicle/home_police/insurance" element={<Insurance/>}/>
      <Route path="/police/police_home/police_vehicle/home_police/pollution" element={<Pollution/>}/>


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
