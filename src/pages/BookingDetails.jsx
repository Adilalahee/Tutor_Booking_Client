import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookingDetails = () => {
    const navigate=useNavigate()
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
    const {_id,name,email,language,image,price,description,review}=book;
    console.log(book)
    const handleSubmit=async e=>{
        e.preventDefault();
        const form=e.target;
        const price=form.price.value;
        const email=user?.email;
        const tutorid=_id;
        if(price<price) return alert("not possible")
        const bidbookData={tutorid,price,email}
        try{await axios.post(`${import.meta.env.VITE_API_URL}/mybookdata`,bidbookData)
        form.reset();
        toast("Data added")
         navigate('/mybookedtutor')
    }
        catch(err){console.log(err)
          toast(err.message)
        }
    console.log(bidbookData)
    }
    return (
      <>
      <div className="min-h-screen bg-gray-100 flex gap-3 items-center justify-center">
      <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <figure>
          <img src={image} alt={name} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">{language}</p>
          <p className="mt-2 text-gray-700">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="text-lg font-bold text-green-500">{price}</div>
            <div className="text-sm text-yellow-500">{email}</div>
            <div className="text-sm text-yellow-500">{review}</div>
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
              value={book.email}
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
              name='email'
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