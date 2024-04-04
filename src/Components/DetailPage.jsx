import React from 'react'
import Header from './Header'
import DetailMain from './DetailMain'
import RightNav from './RightNav'
import Footer from './Footer'
const DetailPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Header />
            <div className="mx-auto px-4">
                <div className='lg:hidden'>
                    <DetailMain />
                </div>
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 ">

                    <div className="col-span-8">
                        <DetailMain />
                    </div>

                    <div className="col-span-3">
                        <RightNav />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailPage