import axios from 'axios';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Bookingtable = ({booking,idx}) => {
    const {_id,name,email,language,image,price}=booking;
    

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
        <td>{price}</td>
        <td>{language}</td>
        {/* <td><NavLink to={`/details/${_id}`}>Details</NavLink></td> */}
        <td>
            <div className='flex gap-2'>
            <NavLink to={`/updatebooking/${_id}`}>Update</NavLink>
                <button onClick={()=>handleDelete(booking._id)}>Delete</button>
            </div></td>
        
      </tr>
 </>
    );
};

export default Bookingtable;