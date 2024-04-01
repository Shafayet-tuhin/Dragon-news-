import React from 'react'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import editor from '../assets/editorsInsight1.png'
import editor2 from '../assets/editorsInsight2.png'
import { FaRegBookmark } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <div>
            <p className='text-[#403F3F] text-xl font-semibold leading-7'>Dragon News Home</p>

            <div className='flex justify-between items-center px-5 py-4 bg-[#F3F3F3] rounded-lg mt-5'>
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


            <div className='px-5 border border-gray-100 rounded-md pb-5'>
                <div className='flex flex-col'>
                    <p className='text-xl font-bold leading-loose mb-5 text-[#403F3F]'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</p>

                    <img src={editor} alt="" />

                    <div>

                        <p className='mt-8 text-[#706F6F] font-normal text-base leading-6'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... </p>

                        <Link to='/details' >
                            <button className='font-semibold text-base leading-6 text-[#FF8C47]'>Read More</button>
                        </Link>
                    </div>

                </div>
                <hr className=' mx-[1%] mt-5' />

                <div className='flex  justify-between items-center mt-5'>
                    <div className='font-medium text-base text-orange-400 flex gap-2 items-center'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        <p className='text-[#706F6F]'>4.9</p>
                    </div>

                    <div className='text-[#706F6F] font-medium text-base flex gap-2 items-center'>
                        <FaEye />
                        <p>499</p>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex justify-between items-center px-5 py-4 bg-[#F3F3F3] rounded-lg mt-5'>
                    <div className='flex gap-4'>
                        <img className='w-10 h-10' src={user1} alt="" />
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


                <div className='px-5 border border-gray-100 rounded-md pb-5'>
                    <div className='flex flex-col'>
                        <p className='text-xl font-bold leading-loose mb-5 text-[#403F3F]'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</p>

                        <img src={editor2} alt="" />

                        <div>

                            <p className='mt-8 text-[#706F6F] font-normal text-base leading-6'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... </p>

                            <Link to='/details' >
                                <button className='font-semibold text-base leading-6 text-[#FF8C47]'>Read More</button>
                            </Link>
                        </div>

                    </div>
                    <hr className=' mx-[1%] mt-5' />

                    <div className='flex  justify-between items-center mt-5'>
                        <div className='font-medium text-base text-orange-400 flex gap-2 items-center'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p className='text-[#706F6F]'>5.0</p>
                        </div>

                        <div className='text-[#706F6F] font-medium text-base flex gap-2 items-center'>
                            <FaEye />
                            <p>280</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainNav