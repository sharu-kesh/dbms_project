import bike from "./new.jpg"
import Card from "./Card"
import Nav from './nav'
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
        {/* <Card imageUrl="https://parivahan.gov.in/parivahan//sites/default/files/images/v-new-vehicle-registration.png" title={"Vehicle Registration"} text={"Register your vehicles"} page="./Add"/> */}
        <Card imageUrl="https://parivahan.gov.in/parivahan//sites/default/files/images/v-licence-registration-details.png" title={"Vehicle Details"} text={"One click to know about your vehicle"} page="./Vehicle" />
        <Card imageUrl="https://parivahan.gov.in/parivahan//sites/default/files/images/v-pucc-icon.png" title={"PUCC"} text={"Check whether your vehicle is under pollution control"} page="./Pollution"/>
        <Card imageUrl="https://parivahan.gov.in/parivahan//sites/default/files/images/v-learners-license-services.png" title={"License"} text={"Get your license details online"} page="./License" />
        <Card imageUrl="https://parivahan.gov.in/parivahan//sites/default/files/images/v-permit-services.png" title={"Insurance"} text={"Know about your vehicle's insurance"} page={"./Insurance"} />
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