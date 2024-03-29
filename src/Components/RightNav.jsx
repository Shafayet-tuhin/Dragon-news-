import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";
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
            <li><button className="py-4 px-14 border border-gray-200"> <FaFacebookF/> Facebook</button></li>
            <li><button className="py-4 px-14 border border-gray-200"><FaTwitter/>Twitter</button></li>
            <li><button className="py-4 px-14 border border-gray-200"><FaInstagram />Instagram</button></li>
          </ul>
          </div>
         </div>

    </div>
  );
};

export default RightNav;
