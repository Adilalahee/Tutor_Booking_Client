import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingDetails = () => {
    const {user}=useContext(AuthContext);
    const {id}=useParams();
    const [book,setBook]=useState([]);

    useEffect(()=>{
  AllBooking()
    },[id])
    const AllBooking=async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/updateBooking/${id}`)
        setBook(data)
    }
    const handleSubmit=e=>{
        e.preventDefault();
    }
    return (
      <>
      <div className="min-h-screen bg-gray-100 flex gap-3 items-center justify-center">
      <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <figure>
          <img src={book.image} alt={book.name} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-semibold">{book.name}</h2>
          <p className="text-gray-500">{book.language}</p>
          <p className="mt-2 text-gray-700">{book.description}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="text-lg font-bold text-green-500">{book.price}</div>
            <div className="text-sm text-yellow-500">{book.review}</div>
          </div>
          {/* <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-full">Book Now</button>
          </div> */}
        </div>
      </div>
      <div>
      <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tutor Email Field */}
          <div className="form-control">
            <label htmlFor="tutorEmail" className="label">
              <span className="label-text">Tutor's Email</span>
            </label>
            <input
              type="email"
              id="tutorEmail"
              className="input input-bordered w-full"
              placeholder="Enter Tutor's Email"
            //   value={tutorEmail}
            //   onChange={(e) => setTutorEmail(e.target.value)}
            //   required
            />
          </div>
          <div className="form-control">
            <label htmlFor="tutorEmail" className="label">
              <span className="label-text">Tutor's Price</span>
            </label>
            <input
               type="number"
               id="price"
               name="price"
              className="input input-bordered w-full"
              placeholder="Enter Tutor's Email"
            //   value={tutorEmail}
            //   onChange={(e) => setTutorEmail(e.target.value)}
            //   required
            />
          </div>

          {/* User Email Field */}
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="Enter Your Email"
              value={user?.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
   
      </>
    );
};

export default BookingDetails;