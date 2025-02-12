import { useEffect, useState } from "react";
import BookingCard from "../Booking/BookingCard";
import axios from "axios";



const TabDetails = () => {
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
     <div className='grid grid-cols-5'>
        {
            bookings.map(booking=><BookingCard key={booking._id} booking={booking}></BookingCard>)
        }
    </div>
  </>
    );
};

export default TabDetails;