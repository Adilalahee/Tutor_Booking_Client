import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingCard from '../Components/Booking/BookingCard';

const AllBooking = () => {
    const [bookings,setBookings]=useState([]);
    const [filter,setFilter]=useState('');
    const [search,setSearch]=useState('');

    useEffect(()=>{
        const getAllBooking=async()=>{
            const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/all-booking?filter=${filter}&search=${search}`)
            setBookings(data)
        }
  getAllBooking()
    },[filter, search])

    console.log(filter)
    return (
     <>
             <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              name='language'
              id='language'
              onChange={(e)=>setFilter(e.target.value)}
              className='border p-4 rounded-lg'
            
            >
              <option value=''>Select language</option>
            <option value='english'>English</option>
            <option value='spanish'>Spanish</option>
            <option value='french'>French</option>
            <option value='german'>German</option>
            <option value='chinese'>Chinese</option>
            </select>
          </div>

          <form>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                onChange={(e)=>setSearch(e.target.value)}
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          <button className='btn'>Reset</button>
        </div>
    <div className='grid grid-cols-5 px-10 py-2'>
        {
            bookings.map(booking=><BookingCard key={booking._id} booking={booking}></BookingCard>)
        }
    </div>
     </>
    );
};

export default AllBooking;