import React, { useContext } from "react";
import logo from "../assets/logo.png";
import user1 from "../assets/user.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  }

  return (
    <div className="container">
      <div className="items-center flex flex-col ">
        <img src={logo} alt="Logo" />
        <p className="text-lg font-normal text-[#706F6F]">
          Journalism Without Fear or Favour
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>

      <div className="navbar lg:px-4 py-4 bg-[#F3F3F3] rounded-2xl mt-7">
        <button className="btn bg-red-600 text-white mr-2 lg:mr-7 animate-pulse">Latest</button>
        <Marquee
          className="lg:mr-7 mr-2"
          speed={50}
          lg:gradient={true}
          lg:gradientColor={["rgba(248, 251, 253, 1)"]}
        >
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <div className="">

        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <Link to="/">
                  {" "}
                  <li className="hover:text-red-500 hover:font-semibold">Home</li>
                </Link>
                <Link to='/about' ><li className="hover:text-red-500 hover:font-semibold">About</li></Link>
                <li className="hover:text-red-500 hover:font-semibold">Career</li>
              </ul>
            </div>

          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 lg:gap-4">
              <Link to="/">
                {" "}
                <li className="hover:text-red-500 hover:font-semibold">Home</li>
              </Link>
              <Link to='/about' ><li className="hover:text-red-500 hover:font-semibold">About</li></Link>
              <li className="hover:text-red-500 hover:font-semibold">Career</li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-2 items-center">
             <Link to='/about'>  <img className="w-10 h-10 mr-2 rounded-full" src={
                user && user.photoURL ? user.photoURL : user1
                
              } alt="User" /></Link>
             {
              user ?  <Link to='/login' ><button className="btn bg-slate-300 " onClick={handleLogout}>Log Out</button></Link>
              : <Link to='/login' ><a className="btn bg-slate-300 animate-bounce">Login</a></Link>
             }
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
