import React from 'react'
import Header from './Header'
import DetailMain from './DetailMain'
import RightNav from './RightNav'
import Footer from './Footer'
const DetailPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-[5%]'>
            <Header />
            <div className="mx-auto px-4">
                <div className="grid grid-cols-12 gap-8 ">

                    <div className="col-span-8">
                        <DetailMain />
                    </div>

                    <div className="col-span-3">
                        <RightNav />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DetailPage