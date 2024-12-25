import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';
import axios from 'axios';
import Bookingtable from '../Components/Booking/Bookingtable';

const MyBookedTutor = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);

    useEffect(()=>{
  getAllBooking()
    },[user])
    const getAllBooking=async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/getbookdata/${user?.email}`)
        setBookings(data)
    }
    return (
     <>
     <table className="table">
    {/* head */}
    <thead className='text-xl'>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
          Id
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        bookings.length===0 ? ( <p>No Data Found</p> ):
        (
            bookings.map((booking,index)=>(
               <Bookingtable
               key={booking?._id}
               idx={index} 
               booking={booking}
               >

               </Bookingtable>
            ))
        )
    }
    </tbody>
    {/* foot */}
    {/* <tfoot>
      <tr>
        <th></th>
        <th>image</th>
        <th>name</th>
        <th>category</th>
        <th></th>
      </tr>
    </tfoot> */}
  </table>
     </>
    );
};

export default MyBookedTutor;