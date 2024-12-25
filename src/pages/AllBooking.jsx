import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingCard from '../Components/Booking/BookingCard';

const AllBooking = () => {
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
     <h1>You will get all the jobs here:{bookings.length}</h1>
    <div className='grid grid-cols-3 gap-4'>
        {
            bookings.map(booking=><BookingCard key={booking._id} booking={booking}></BookingCard>)
        }
    </div>
     </>
    );
};

export default AllBooking;