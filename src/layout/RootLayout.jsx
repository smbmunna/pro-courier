import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

export const RootLayout= ()=>{
    return (
        <div className=" bg-[#EAECED]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}