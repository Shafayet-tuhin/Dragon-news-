import React from 'react';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <div className='items-center flex flex-col '>
        <img src={logo} alt="Logo" />
        <p className="text-lg font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>

      <div className="navbar px-4 py-4 bg-[#F3F3F3] rounded-2xl mt-7">
        <button className='btn btn-primary mr-7'>Latest</button>
        <Marquee className='mr-7' speed={50} gradien={true} gradient={true} gradientColor={['rgba(248, 251, 253, 1)']}  >
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>

        <button>
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </button>
      </div>


      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            </ul>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-[#706F6F] text-lg leading-7 font-normal">
            <Link to='/'> <li className='hover:text-red-500 hover:font-semibold'>Home</li></Link>
            <li className='hover:text-red-500 hover:font-semibold'>About</li>
            <li className='hover:text-red-500 hover:font-semibold'>Career</li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="w-10 h-10 mr-2" src={user} alt="User" />
          <Link to='/login'><a className="btn">Login</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
