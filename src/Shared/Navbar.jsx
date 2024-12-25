import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Auth/AuthContext';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const links=<>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allbooking">All Booking</Link></li>
        <li><Link to="/addbooking">Add Booking</Link></li>
        <li><Link to="/mybooking">My Booking</Link></li>
        <li><Link to="/findtutor">Find Tutor</Link></li>
  </>
    return (
      <>
 <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
{links}
    {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
    </ul>

  </div>
  <div className="navbar-end">
  {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {links}
              <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
            </ul>
          </div>
        )}
  </div>
</div>
      </>
    );
};

export default Navbar;