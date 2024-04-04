import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { FaUser } from 'react-icons/fa';
import nonuser from '../assets/nonuser.svg'
const MainAbout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='flex flex-col items-center gap-5 mt-4'>
      <h1 className='text-3xl'>User Info</h1>
      <hr className='border-t-2 border-gray-300 w-1/2' />

      {user.photoURL ? (
        <img className='w-36 h-36 rounded-3xl border-4 border-white shadow-lg ' src={user.photoURL} alt="User Avatar" />
      ) : (
        <img className='w-36 h-36 rounded-3xl border-4 border-white shadow-lg ' src={nonuser} alt="User Avatar" />
      )}



      <div className='text-white text-xl font-medium'>
        <p className='mt-2 px-8 py-4 bg-gradient-to-r from-slate-500 to-violet-400 rounded-3xl'>User Name : {user.displayName}</p>
        <p className='mt-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl'>User Email : {user.email}</p>
      </div>
    </div>
  )
}

export default MainAbout
