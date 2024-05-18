import Home1 from './Home1'
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'
import image from './images-removebg-preview.jpg'
export default function Loginhome(){
    return(
        <>
        <nav className="nav-bar">
            <p>
            <img src={image} alt="" />
        <h2>Vaahan Website</h2>
        </p>
        <ul>
        <div class="vertical-line"></div>
            <li><Link to="/Admin">Admin</Link></li>
            <li><Link to="/police">Police</Link></li>
            <li><Link to="/user">User</Link></li>
            <li> <a href="/About">About Us</a></li>
        </ul>
    </nav>
    <Home1 />
    <footer className="login-footer">
        <div className="fad">
            <p>&copy;2024</p>
            <p><IoMdContact />+91-123456789</p>
            <p><MdEmail />customer@vaahan.com</p>
        </div>
    </footer>
    </>
    );
}