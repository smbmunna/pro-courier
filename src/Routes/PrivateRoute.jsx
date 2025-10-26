import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute= ({children})=>{
    const {loading, user}= useAuth(); 

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    if(!user){
        <Navigate to='/login'/>
    }


    return children; 
}


export default PrivateRoute; 