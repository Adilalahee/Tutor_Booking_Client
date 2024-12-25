import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
     <Tabs>
        <div className='container px-6 py-10 mx-auto'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>
                Browse jobs by Categories
            </h1>
            <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'>
                Three categories available here

            </p>
            <div className='flex items-center justify-center'>
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4">
        {/* Title */}
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-gray-800">Chinese</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        {

        }
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-gray-800">English</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-gray-800">Spanish</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-gray-800">French</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        <div>
        <Link to="/tabDetails" className="text-xl font-semibold text-gray-800">German</Link>
        <HiArrowRight className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        </div>
        
        
        
        
        
        

        {/* Right Arrow Icon */}
        
      </div>
    </div>
            {/* <TabList>
      <Tab>Chinese</Tab>
      <Tab>English</Tab>
      <Tab>Spanish</Tab>
      <Tab>French</Tab>
      <Tab>German</Tab>
    </TabList> */}
            </div>
            {/* <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel> */}
        </div>
  </Tabs>
   </>
    );
};

export default TabCategories;