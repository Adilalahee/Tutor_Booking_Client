import axios from 'axios';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Bookingtable = ({booking,idx}) => {
    const {_id,name,language,image,price,review}=booking;
    

    const handleDelete=async id=>{
        try{
            const {data}=await axios.delete(`${import.meta.env.VITE_API_URL}/bookingdata/${id}`)
        }
        catch (err){
            console.log(err)
        }

    }
    return (
 <>
     <tr> 
        <td>{idx+1}</td>
        <td> <img className='w-16 h-8' src={image} alt="Sports" /> </td>
        <td>{name}</td>
        <td>{language}</td>
        <td>{price}</td>
        <td>{review}</td>
        
        <td>
            <div className='flex gap-2'>
            <NavLink className='btn btn-accent' to={`/updatebooking/${_id}`}>Update</NavLink>
                <button className='btn btn-warning' onClick={()=>handleDelete(booking._id)}>Delete</button>
            </div></td>
        
      </tr>
 </>
    );
};

export default Bookingtable;