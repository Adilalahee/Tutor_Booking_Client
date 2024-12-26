import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
import Language from '../pages/Language';
import Tutor from '../pages/Tutor';
import ('./MainLayout.css')

const MainLayout = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };
  
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  
    return (
   <>
   <div>
    <div className='flex flex-row'>
    <button onClick={toggleTheme}>
         {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    <Navbar></Navbar>
    </div>
   
   <div className='min-h-[calc(100vh-300px)]'>
   <Outlet></Outlet>
   </div>
   <Language></Language>
   <Tutor></Tutor>
   <Footer></Footer>
   </div>
   </>
    );
};

export default MainLayout;