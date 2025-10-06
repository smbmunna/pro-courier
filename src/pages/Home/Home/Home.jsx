import Banner from "../../../components/Banner/Banner";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import FAQ from "../FAQ/FAQ";
import HowItWorks from "../HowItWorks/HowItWorks";
import Merchant from "../Merchant/Merchant";
import OurSpeciality from "../OurSpeciality/OurSpeciality";
import Partners from "../Partners/Partners";
import Services from "../Services/Services";

const Home= ()=>{
    return (
        <div>
            <Banner/>  
            <HowItWorks/>
            <Services/>        
            <Partners/>  
            <OurSpeciality/>
            <Merchant/>
            <CustomerFeedback/>
            <FAQ/>
        </div>
    )
}

export default Home; 