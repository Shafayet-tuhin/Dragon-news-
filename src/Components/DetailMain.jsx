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
import { FaArrowCircleLeft } from "react-icons/fa";

import one from "../assets/1.png"
import two from "../assets/2.png"
import three from "../assets/3.png"
import { BsCalendar3 } from "react-icons/bs";

const DetailMain = () => {
    return (
        <div className=''>
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

                    <img className='mb-5' src={editor} alt="" />
                    <p className='text-2xl font-bold leading-10  text-[#403F3F]'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</p>

                    <div>

                        <p className='mt-8 text-[#706F6F] font-normal text-base leading-6'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.</p>

                        <Link to='/' className='flex justify-center' >
                            <button className=' btn btn-ghost bg-slate-400 font-semibold text-base leading-6 flex gap-2 items-center mt-8'>
                                <FaArrowCircleLeft /> Go Back</button>
                        </Link>
                    </div>

                </div>
            </div>

           
           <p className='text-[#403F3F] font-semibold text-2xl mt-4'>Editors Insight</p>


            <div className='mt-7 flex gap-2'>


                <div className='flex flex-col lg:gap-5'>
                    <img className='w-full h-[5rem] lg:h-[9.375rem]' src={one} alt="" />

                    <p className='font-semibold text-sm lg:text-xl text-[#403F3F]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                    <div className='flex flex-col lg:flex-row lg:gap-5 font-medium  text-sm lg:text-base leading-6 text-center text-slate-400'>
                        <p>Sports</p>

                        <div className='flex gap-2 items-center text-[#9F9F9F]'>
                            <BsCalendar3 />
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>

                </div>





                <div className='flex flex-col lg:gap-5'>
                    <img className='w-full h-[5rem] lg:h-[9.375rem]' src={two} alt="" />

                    <p className='font-semibold text-sm lg:text-xl text-[#403F3F]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                    <div className='flex flex-col lg:flex-row lg:gap-5 font-medium  text-sm lg:text-base leading-6 text-center text-slate-400'>
                        <p>Sports</p>

                        <div className='flex gap-2 items-center text-[#9F9F9F]'>
                            <BsCalendar3 />
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>

                </div>




                <div className='flex flex-col lg:gap-5'>
                    <img className='w-full h-[5rem] lg:h-[9.375rem]' src={three} alt="" />

                    <p className='font-semibold text-sm lg:text-xl text-[#403F3F]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                    <div className='flex flex-col lg:flex-row lg:gap-5 font-medium  text-sm lg:text-base leading-6 text-center text-slate-400'>
                        <p>Sports</p>

                        <div className='flex gap-2 items-center text-[#9F9F9F]'>
                            <BsCalendar3 />
                            <p>Jan 4, 2022</p>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default DetailMain