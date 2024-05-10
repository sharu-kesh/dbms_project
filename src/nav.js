import {Link} from 'react-router-dom'
function Nav(){
    return(
        <nav className="nav">
            <h2>Know About Your Vehicle</h2>
            <ul>
            <div class="vertical-line"></div>
                <li><a href="/Home">Home</a></li>
                <div className="vehicle">
                <li><a href="#">Info</a>
                    <div className="content">
                        <Link to="/Vehicle"> Vehicle Details</Link>
                        <Link to="/Pollution">Pollution Certificate</Link>
                        <Link to="/License">License Details</Link>
                        <Link to="/Insurance">Insurance Details</Link>
                    </div>
                </li>
                <li><a href='/'>Logout</a></li>
                </div>
            </ul>
        </nav>
    );

}

export default Nav;