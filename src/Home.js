import bike from "./new.jpg"
import Card from "./Card"
import Nav from './nav'
import img1 from './v-licence-registration-details.png'
import img2 from './v-pucc-icon.png'
import img3 from './v-learners-license-services.png'
import img4 from './v-permit-services.png'
import img5 from './v-homologation.png'
import img6 from './v-echallan-icon.png'
import img7 from './v-vehicle-registration.png'
export default function Home(){
    return(
        <>
        <Nav />
        <div className="image">
            <img src={bike} alt=""></img>
        </div>
        <div className="services">
             <h2>Services</h2>
             <p>Various services related to registration of vehicle, Vehicle Status,  Change of Address, Transfer of Ownership etc.</p>
             </div>
        <div className="card-card">
        <Card imageUrl={img1} title={"Vehicle Details"} text={"One click to know about your vehicle"} page="/home/vehicle" />
        <Card imageUrl={img2} title={"PUCC"} text={"Check whether your vehicle is under pollution control"} page="/home/pollution"/>
        <Card imageUrl={img3} title={"License"} text={"Get your license details online"} page="/home/license" />
        <Card imageUrl={img4} title={"Insurance"} text={"Know about your vehicle's insurance"} page="/home/insurance" />
        <Card imageUrl={img5} title={"Owner Details"} text={"Check for your details"} page="/home/owner" />
        <Card imageUrl={img6} title={"Transfer Ownership"} text={"Udpdate the ownership"} page="/home/transfer" />
        <Card imageUrl={img7} title={"Update Details"} text={"Udpdate Your personal details"} page="/home/update" />

        
        </div>
        <div className="news-container">
            <div className="safe">
                Safety Tips
            </div>
            <ul>
                <li>
                    Wear Helmet
                </li>
                <li>Don't drink and drive</li>
                <li>Always wear your seat belt</li>
                <li>Avoid over-speeding</li>
                <li>Don't drive your vehicles in pathway</li>
                <li>Follow traffic signals</li>
            </ul>
        </div>
        </>
    );
}