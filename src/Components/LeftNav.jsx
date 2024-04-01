import React, { useEffect, useState } from 'react'
import one from "../assets/1.png"
import two from "../assets/2.png"
import three from "../assets/3.png"
import { BsCalendar3 } from "react-icons/bs";

const LeftNav = () => {

  // const [catagory , setCatagory ] = useState([])

  // useEffect(() => {
  //   fetch ("http://localhost:5000/data")
  //    .then(res => res.json())
  //    .then(data => {
  //       setCatagory(data)
  //       console.log(catagory)
  //     })
  //     .catch((er) => console.log(er.message))
  // },[])

  return (
    <div className=''>
      <div>
        <ul className="menu mt-[-1rem] w-full">
          <li>
            <h2 className="menu-title text-xl font-semibold leading-7 text-[#403F3F] mb-5">All Caterogy</h2>
            <ul className='text-xl font-medium leading-7 text-[#9F9F9F] flex flex-col gap-7'>
              <li className='py-2 px-10 rounded-lg bg-[#E7E7E7] text-[#403F3F] font-semibold'><a>National News</a></li>
              <li><a>Breaking News</a></li>
              <li><a>Regular News</a></li>
              <li><a>International News</a></li>
              <li><a>Sports</a></li>
              <li><a>Entertainment</a></li>
              <li><a>Culture</a></li>
              <li><a>Arts</a></li>
              <li><a>All News</a></li>

              {/* {
                catagory.map((item) => {
                  return(
                    <li><a> {item.name} </a></li>
                  )
                })
              } */}
            </ul>
          </li>
        </ul>
      </div>

      <div className='mt-7 flex flex-col gap-4'>


        <div className='flex flex-col gap-5'>
          <img className='w-full h-[9.375rem]' src={one} alt="" />

          <p className='font-semibold text-xl text-[#403F3F]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

          <div className='flex gap-5 font-medium text-base leading-6 text-center'>
            <p>Sports</p>

            <div className='flex gap-2 items-center text-[#9F9F9F]'>
              <BsCalendar3 />
              <p>Jan 4, 2022</p>
            </div>
          </div>

        </div>


        


        <div className='flex flex-col gap-5'>
          <img className='w-full h-[9.375rem]' src={two} alt="" />

          <p className='font-semibold text-xl text-[#403F3F]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

          <div className='flex gap-5 font-medium text-base leading-6 text-center'>
            <p>Sports</p>

            <div className='flex gap-2 items-center text-[#9F9F9F]'>
              <BsCalendar3 />
              <p>Jan 4, 2022</p>
            </div>
          </div>

        </div>




        <div className='flex flex-col gap-5'>
          <img className='w-full h-[9.375rem]' src={three} alt="" />

          <p className='font-semibold text-xl text-[#403F3F]'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

          <div className='flex gap-5 font-medium text-base leading-6 text-center'>
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

export default LeftNav