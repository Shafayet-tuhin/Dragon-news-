import React from 'react'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import { FaRegBookmark } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
const MainNav = () => {
    return (
        <div>
            <p className='text-[#403F3F] text-xl font-semibold leading-7'>Dragon News Home</p>

            <div className='flex justify-between items-center px-5 py-4 bg-[#F3F3F3] rounded-lg my-5'>
                <div className='flex gap-4'>
                    <img className='w-10 h-10' src={user2} alt="" />
                    <div>
                        <p className='text-base font-semibold leading-7 text-[#403F3F]'>Awlad Hossain</p>
                        <p className='font-normal text-sm text-[#706F6F]'>2022-08-21</p>
                    </div>
                </div>

                <div className='flex gap-3 text-2xl'>
                <FaRegBookmark />
                <GoShareAndroid />
                </div>
            </div>

        </div>
    )
}

export default MainNav