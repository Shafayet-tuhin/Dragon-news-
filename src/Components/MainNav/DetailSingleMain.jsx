

import { FaRegBookmark } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const DetailSingleMain = () => {
    const item = useLocation();
    const data = item.state.item.item;
    console.log(data)
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

                    <img className='mb-5' src={data.image_url} alt="" />
                    <p className='text-2xl font-bold leading-10  text-[#403F3F]'>{data.title}</p>

                    <div>

                        <p className='mt-8 text-[#706F6F] font-normal text-base leading-6'>{data.details}</p>

                        <Link to='/' className='flex justify-center' >
                            <button className=' btn btn-ghost bg-slate-400 font-semibold text-base leading-6 flex gap-2 items-center mt-8'>
                                <FaArrowCircleLeft /> Go Back</button>
                        </Link>
                    </div>

                </div>
            </div></div>
    )
}

export default DetailSingleMain