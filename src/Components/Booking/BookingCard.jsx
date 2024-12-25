import React from 'react';
import { NavLink } from 'react-router-dom';

const BookingCard = ({booking}) => {
    const {_id,name,email,language,image}=booking;
    return (
    <>
     <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <img src={image} alt="Tutorial Image" className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        {/* Email */}
        <p className="text-gray-600 text-sm mt-2">{email}</p>

        {/* Language */}
        <p className="text-gray-600 text-sm mt-2">
          <span className="font-semibold">Language: </span>{language}
        </p>
      </div>

      {/* Footer (Optional) */}
      <div className="p-4 bg-gray-100">
        <button className="btn btn-primary w-full">Follow</button>
        <NavLink to={`/bookingDetails/${_id}`}>Details</NavLink>
      </div>
    </div>
    </>
    );
};

export default BookingCard;