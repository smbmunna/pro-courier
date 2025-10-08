import { Outlet } from "react-router"
import authImg from '../assets/authImage.png'
import ProCourierLogo from "../components/ProCourierLogo/ProCourierLogo";

const AuthLayout = () => {
    return (
        <div className="align-left">
            <ProCourierLogo/>
            <div className="flex items-center">

                <div className="flex-1">
                    <Outlet />
                </div>

                <div className="flex-1">
                    <img src={authImg} alt="Auth Image" />
                </div>
            </div>
        </div>
    )
}


export default AuthLayout; 