import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../Routes/PrivateRoute"; 
import SendParcel from "../pages/SendParcel/SendParcel";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout, 
    children: [
        {index:true, Component: Home},
        {path: "about", Component: About},
        {path: "coverage", Component: Coverage, loader:()=>fetch('services_centers.json')},
        {path: "sendParcel", element: <PrivateRoute><SendParcel/></PrivateRoute>}
    ]    
  },
  {
    path: "/",
    Component: AuthLayout, 
    children: [
      {path: "login", Component: Login},
      {path: "register", Component: Register}
    ]
  }
]);