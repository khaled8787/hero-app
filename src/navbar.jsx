import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Link, Links, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <NavLink className={({isActive}) => `m-2 text-xl ${isActive ? ' m-2 text-green-700 border-b-2': ''}`} to={'/'}><li>Home</li></NavLink>
    <NavLink className={({isActive}) => `m-2 text-xl ${isActive ? ' text-xl text-green-700 border-b-2': ''}`} to={'/apps'}><li className=' text-xl'>Apps</li></NavLink>
    <NavLink className={({isActive}) => `m-2 text-xl ${isActive ? ' text-xl m-2 text-green-700 border-b-2': ''}`} to={'/installedApp'}><li className='text-xl  '>Installation</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm w-full">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'}>
    <div className='flex items-center gap-2'>
        <img className='h-[40px] w-[40px]' src="/src/assets/logo.png" alt="" />
      <a className="text-xl text-purple-700 font-bold">AppVerse</a>
    </div>
    </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <a className='btn btn-primary' href="https://github.com/khaled8787"><FaGithub />
 Contribute</a>
  </div>
</div>
    );
};

export default Navbar;