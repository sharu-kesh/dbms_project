import {Link} from 'react-router-dom'
function Nav(props){
    return(
        <nav className="nav">
            <h2>Know About Your Vehicle</h2>
            <ul>
            <div class="vertical-line"></div>
                <li><a href="/home">Home</a></li>
                <li><a href={props.tPath}>Transfer Onwership</a></li>
                <div className="vehicle">
                <li><a href="#">Info</a>
                    <div className="content">
                        <Link to="/home/vehicle"> Vehicle Details</Link>
                        <Link to="/home/pollution">Pollution Certificate</Link>
                        <Link to="/home/license">License Details</Link>
                        <Link to="/home/insurance">Insurance Details</Link>
                        <Link to="/home/owner">Owner Details</Link>
                        <Link to="/home/update">Update Details</Link>
                    </div>
                </li>
                </div>
                <li><Link to="/home/complaint_home">Complaint</Link></li>
                <li><a href='/'>Logout</a></li>
            </ul>
        </nav>
    );

}

export default Nav;