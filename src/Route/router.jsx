import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import AddBooking from "../pages/AddBooking";
import MyBooking from "../pages/MyBooking";
import AllBooking from "../pages/AllBooking";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import FindTutor from "../pages/FindTutor";
import TabDetails from "../Components/Tabs/TabDetails";
import UpdateBooking from "../pages/UpdateBooking";

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
          path:"/addbooking",
          element:<AddBooking></AddBooking>
        },
        {
          path:"/mybooking",
          element:<MyBooking></MyBooking>
        },
        {
          path:"/allbooking",
          element:<AllBooking></AllBooking>
        },
        {
          path:"/findtutor",
          element:<FindTutor></FindTutor>
        },
        {
          path:"/tabDetails",
          element:<TabDetails></TabDetails>
        },
        {
          path:'/updatebooking/:id',
          element:<UpdateBooking></UpdateBooking>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;