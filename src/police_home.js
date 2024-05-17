import { Link } from 'react-router-dom'
import image from './images-removebg-preview.jpg'
function Police_home() {
  return (
    <div>
        <nav className="nav-bar">
            <p>
            <img src={image} alt="" />
        <h2>Vaahan Website</h2>
        </p>
        <ul>
        <div class="vertical-line"></div>
            <li><Link to="/police/police_home/police_vehicle">Vehicle Details</Link></li>
            <li><Link to="/">Log Out</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Police_home