import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../Auth/AuthContext';

const UpdateBooking = () => {
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
    const {id}=useParams();
    const [booking,setBooking]=useState([]);

    useEffect(()=>{
  AllBooking()
    },[id])
    const AllBooking=async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/updateBooking/${id}`)
        setBooking(data)
    }
    const handleSubmit=async e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const image=form.image.value;
        const language=form.language.value;
        const price=form.price.value;
        const addBookingForm={name,
            buyer:{email,name:user?.displayName
            },
            image,language,price}
      try{await axios.put(`${import.meta.env.VITE_API_URL}/myupdateBooking/${id}`,addBookingForm)
      form.reset();
      toast("Data updated")
       navigate('/mybooking')
  }
      catch(err){console.log(err)
        toast(err.message)
      }
    }
    return (
<>
<div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">User Info Form</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-control mb-4">
          <label htmlFor="name" className="label">
            <span className="label-text">Name (Who Logged In)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={booking.name}
            // value={formData.name}
            // onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="form-control mb-4">
          <label htmlFor="email" className="label">
            <span className="label-text">Email (Who Logged In)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={booking.email}
            disabled="true"
            // value={formData.email}
            // onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Image URL */}
        <div className="form-control mb-4">
          <label htmlFor="image" className="label">
            <span className="label-text">Image (Tutorial Image)</span>
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={booking.image}
            // onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter image URL"
          />
        </div>

        {/* Language */}
        <div className="form-control mb-4">
          <label htmlFor="language" className="label">
            <span className="label-text">Language</span>
          </label>
          <select
            id="language"
            name="language"
            defaultValue={booking.language}
            // onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="chinese">Chinese</option>
          </select>
        </div>

        {/* Price */}
        <div className="form-control mb-4">
          <label htmlFor="price" className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={booking.price}
            // onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter price"
          />
        </div>

        {/* Description */}
        <div className="form-control mb-4">
          <label htmlFor="description" className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={booking.description}
            // onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
          />
        </div>

        {/* Review */}
        <div className="form-control mb-4">
          <label htmlFor="review" className="label">
            <span className="label-text">Review (Default: 0)</span>
          </label>
          <input
            type="number"
            id="review"
            name="review"
            defaultValue={booking.review}
            // onChange={handleChange}
            className="input input-bordered w-full"
            min="0"
            max="5"
            placeholder="Enter review score"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-primary w-full">
            Update
          </button>
        </div>
      </form>
    </div>
</>
    );
};

export default UpdateBooking;