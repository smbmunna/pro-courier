import Banner from "../../../components/Banner/Banner";
import Merchant from "../Merchant/Merchant";
import OurSpeciality from "../OurSpeciality/OurSpeciality";
import Partners from "../Partners/Partners";
import Services from "../Services/Services";

const Home= ()=>{
    return (
        <div>
            <Banner/>  
            <Services/>        
            <Partners/>  
            <OurSpeciality/>
            <Merchant/>
        </div>
    )
}

export default Home; 