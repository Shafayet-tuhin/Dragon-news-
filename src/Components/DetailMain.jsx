import React from 'react'


import one from "../assets/1.png"
import two from "../assets/2.png"
import three from "../assets/3.png"
import { BsCalendar3 } from "react-icons/bs";

import DetailSingleMain from './MainNav/DetailSingleMain';

const DetailMain = () => {
    return (
        <div className=''>
            <p className='text-[#403F3F] text-xl font-semibold leading-7'>Dragon News Home</p>

            <DetailSingleMain />


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