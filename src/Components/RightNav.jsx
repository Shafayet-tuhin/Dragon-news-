import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import qZone1 from '../assets/qZone1.png';
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";
import bg from "../assets/bg.png";


const RightNav = () => {
  return (
    <div>

      <div >
        <h2 className="text-xl font-semibold leading-7">Login With</h2>
        <button className="btn btn-outline btn-primary mt-4 mb-2 w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with GitHub
        </button>
      </div>


      <div>
        <p className="font-semibold text-xl leading-7 mt-7 mb-2">Find Us On</p>

        <div>
          <ul class="menu rounded-box">
            <li><button className="py-4 px-14 border border-gray-200"> <FaFacebookF /> Facebook</button></li>
            <li><button className="py-4 px-14 border border-gray-200"><FaTwitter />Twitter</button></li>
            <li><button className="py-4 px-14 border border-gray-200"><FaInstagram />Instagram</button></li>
          </ul>
        </div>
      </div>

         {/* Q zone */}

      <div className="bg-[#F3F3F3] px-2 py-1 rounded-xl w-full mt-5">

        <div>
        
          <div className="flex flex-col gap-3 px-2 py-3">
          <p className="font-semibold text-xl leading-7 ">Q-Zone</p>
              <img src={qZone1} alt="" />
              <img src={qZone2} alt="" />
              <img src={qZone3} alt="" />
          </div>
        </div>

      </div>

      {/* bg color */}

      <div className="mt-5 relative">
            <img className="w-full absolute h-full" src= {bg} alt="" />

             <div className="relative text-white">
                 <div className="flex flex-col justify-center items-center text-center px-10 py-16">
                 <h1 className="font-bold text-3xl leading-[2.8rem] mb-5">Create an Amazing Newspaper</h1>

                 <p className="font-normal text-base leading-7">
                 Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                 </p>

                 <button className="btn mt-12 btn-secondary bg-red-500"> Learn More</button>
                 </div>
             </div>
      </div>

    </div>
  );
};

export default RightNav;
