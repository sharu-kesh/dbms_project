import {Link} from 'react-router-dom'
function Nav(){
    return(
        <nav className="nav">
            <h2>Know About Your Vehicle</h2>
            <ul>
            <div class="vertical-line"></div>
                <li><a href="/home">Home</a></li>
                <li><a href="/home/transfer">Transfer Onwership</a></li>
                <div className="vehicle">
                <li><a href="#">Info</a>
                    <div className="content">
                        <Link to="/Vehicle"> Vehicle Details</Link>
                        <Link to="/Pollution">Pollution Certificate</Link>
                        <Link to="/License">License Details</Link>
                        <Link to="/Insurance">Insurance Details</Link>
                        <Link to="/owner">Owner Details</Link>
                        <Link to="/home/update">Update Details</Link>
                    </div>
                </li>
                </div>
                <li><Link to="/home/complaint">Complaint</Link></li>
                <li><a href='/'>Logout</a></li>
            </ul>
        </nav>
    );

}

export default Nav;