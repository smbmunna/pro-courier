import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout, 
    children: [
        {index:true, Component: Home},
        {path: "about", Component: About}
    ]
  },
]);