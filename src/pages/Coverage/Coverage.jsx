import { useLoaderData } from "react-router";
import BangladeshMap from "./BangladeshMap";
import { useState } from "react";



const Coverage = () => {
    const serviceCenters = useLoaderData();

    //Searching
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const handleSearch = () => {
        const query = searchQuery.toLowerCase().trim();
        const found = serviceCenters.find(center =>
            center.district.toLowerCase() === query
        )
        if (found) {
            console.log(selectedDistrict); 
            setSelectedDistrict(found);
        } else {
            alert('Not found');
            setSelectedDistrict(null);
        }
    }

    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            handleSearch(); 
        }
    }

    return <div className="mx-8 mb-16">
        <h1 className="my-4 text-[#03373D] text-2xl font-semibold">We are available in 64 districts. </h1>
        <div className="flex my-4 gap-2 justify-center">
            <input
                className="border rounded-xl p-2 border-gray-400"
                type="text"
                placeholder="Search Service Centers"
                onKeyDown={(e)=>handleKeyPress(e)}
                onChange={(e) => setSearchQuery(e.target.value)}
            />


            <button
                className="btn"
                onClick={handleSearch}
            >Search</button>
        </div>
        <h1 className="text-[#03373D] text-lg font-semibold my-8">We deliver almost all over Bangladesh</h1>
        <BangladeshMap
            serviceCenters={serviceCenters}
            selectedDistrict= {selectedDistrict}
        />

    </div>
}


export default Coverage; 