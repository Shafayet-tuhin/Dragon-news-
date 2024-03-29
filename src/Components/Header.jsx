import React from 'react';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';


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
        <Marquee speed={50} gradien={true} gradient={true} gradientColor={['rgba(248, 251, 253, 1)']}  >
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
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
          <ul className="menu menu-horizontal px-1 flex gap-10">
             <li>Home</li>
             <li>About</li>
             <li>Career</li>
          </ul>
        </div>
        <div className="navbar-end">
        <img className="w-10 h-10 mr-2" src={user} alt="User" />
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
