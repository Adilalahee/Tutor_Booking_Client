import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
   <>
   <Navbar></Navbar>
   <div className='min-h-[calc(100vh-300px)]'>
   <Outlet></Outlet>
   </div>
   <Footer></Footer>
   </>
    );
};

export default MainLayout;