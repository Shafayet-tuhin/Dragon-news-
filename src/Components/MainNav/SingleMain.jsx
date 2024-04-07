import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'
import DetailSingleMain from './DetailSingleMain';
import { useNavigate } from "react-router-dom";

const SingleMain = (item) => {

    const data = item.item;

    const navigate = useNavigate()

    const handleRead = () => {
        navigate('/details', { state: { item: item } })
    }

    return (
        <div>


            <div className='flex justify-between items-center px-5 py-4 bg-[#F3F3F3] rounded-lg mt-5'>
                <div className='flex gap-4'>
                    <img className='w-10 h-10 rounded-3xl' src={data.author.img} alt="" />
                    <div>
                        <p className='text-base font-semibold leading-7 text-[#403F3F]'>{data.author.name}</p>
                        <p className='font-normal text-sm text-[#706F6F]'>{data.author.published_date}</p>
                    </div>
                </div>

                <div className='flex gap-3 text-2xl'>
                    <FaRegBookmark />
                    <GoShareAndroid />
                </div>
            </div>


            <div className='px-5 border border-gray-100 rounded-md pb-5'>
                <div className='flex flex-col'>
                    <p className='text-xl font-bold leading-loose mb-5 text-[#403F3F]'>{data.title}</p>

                    <img src={data.image_url} alt="" />

                    <div>

                        <p className='mt-8 text-[#706F6F] font-normal text-base leading-6'>{data.details.slice(0, 205)}...</p>

                        <button onClick={handleRead} className='font-semibold text-base leading-6 text-[#FF8C47] animate-bounce'>Read More</button>

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
                        <p className='text-[#706F6F]'>{data.rating.number}</p>
                    </div>

                    <div className='text-[#706F6F] font-medium text-base flex gap-2 items-center'>
                        <FaEye />
                        <p>{data.total_view}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleMain