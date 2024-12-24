import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElementL:<Errorpage></Errorpage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;