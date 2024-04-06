import React, { useContext } from 'react'
import SingleMain from './SingleMain'
import { AuthContext } from '../../Context/AuthProvider'

const MainNav = () => {

    const {data} =useContext(AuthContext) 

    return (
     <div>
          <p className='text-[#403F3F] text-xl font-semibold leading-7'>Dragon News Home</p>
           {
            data.map((item) => {
                return (
                    <SingleMain key={item.id} item={item}/>
                )
            })
           }
     </div>
    )
}

export default MainNav