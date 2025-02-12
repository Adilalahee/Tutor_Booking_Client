import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
  const [bookings,setBookings]=useState([]);

  useEffect(()=>{
getAllBooking()
  },[])
  const getAllBooking=async()=>{
      const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/getBooking`)
      setBookings(data)
  }
  console.log(bookings)
    return (
   <>

        <div className='container py-5'>
            <h1 className='text-2xl font-semibold text-center text-[#333333] capitalize'>
                Browse Tutor by Categories
            </h1>
            <div className='flex'>
            <div className="mx-auto py-10 bg-white shadow-lg">
      <div className="flex items-center gap-3  p-4">
        {/* Title */}
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">Chinese</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">English</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">Spanish</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">French</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">German</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">Italian</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">Portugese</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">Arabic</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-[#333333]">Japanese</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        
        
        
        
        
        

        {/* Right Arrow Icon */}
        
      </div>
    </div>
            </div>
        </div>
   </>
    );
};

export default TabCategories;