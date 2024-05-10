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

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/vehicle" element={<Vehicle/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/insurance" element={<Insurance/>}/>
      <Route path="/pollution" element={<Pollution/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/police" element={<Police/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/home1" element={<Home1/>}/>
      <Route path="/signup1" element={<Signup1/>}/>
      <Route path="/signup2" element={<Signup2/>}/>
      <Route path="/signup3" element={<Signup3/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
