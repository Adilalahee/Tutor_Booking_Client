import React from 'react';
import { NavLink } from 'react-router-dom';

const BookingCard = ({booking}) => {
    const {_id,name,email,language,image}=booking;
    return (
    <>
     <div className="max-w-lg mx-auto bg-[#F7F9FC] shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <img src={image} alt="Tutorial Image" className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Name */}
        <h2 className="text-xl font-semibold text-[#333333]">{name}</h2>

        {/* Email */}
        <p className="text-[#333333] text-sm mt-2">{email}</p>

        {/* Language */}
        <p className="text-[#333333] text-sm mt-2">
          <span className="font-semibold">Language: </span>{language}
        </p>
      </div>

      {/* Footer (Optional) */}
      <div className="p-4 ">
        <NavLink className="btn bg-[#2F80ED] w-full" to={`/bookingDetails/${_id}`}>Details</NavLink>
      </div>
    </div>
    </>
    );
};

export default BookingCard;