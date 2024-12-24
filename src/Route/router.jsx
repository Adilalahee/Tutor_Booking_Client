import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Alltution from "../pages/Alltution";
import Addtution from "../pages/Addtution";
import Mytution from "../pages/Mytution";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElementL:<Errorpage></Errorpage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/",
          element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/alltution",
        element:<Alltution></Alltution>,
      },
      {
        path:"/addtution",
        element:<Addtution></Addtution>,
      },
      {
        path:"/mytution",
        element:<Mytution></Mytution>,
      }
      ]
    },
  ]);

  export default router;