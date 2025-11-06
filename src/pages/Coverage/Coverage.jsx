import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";



const Coverage = () => {
    const serviceCenters= useLoaderData();
    //console.log(serviceCenters); 


    return <div className="mx-8">
        <h1 className="text-left  text-[#03373D] text-2xl font-semibold">We are available in 64 districts. </h1>
        <div className="my-16">
            <p>Search Bar</p>
        </div>
        <h1 className="text-left  text-[#03373D] text-lg font-semibold my-8">We deliver almost all over Bangladesh</h1>
        <BangladeshMap serviceCenters={serviceCenters}/>
       
    </div>
}


export default Coverage; 