import React from 'react'
import user from '../assets/user.png';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='bg-[#F3F3F3]'>


            <div className='flex justify-between mx-[20%] py-[1%]'>

                <div></div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-10 text-[#706F6F] text-lg leading-7 font-normal">
                        <Link to='/'> <li className='hover:text-red-500 hover:font-semibold'>Home</li></Link>
                        <li className='hover:text-red-500 hover:font-semibold'>About</li>
                        <li className='hover:text-red-500 hover:font-semibold'>Career</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <img className="w-10 h-10 mr-2" src={user} alt="User" />
                    <Link to='/login'><a className="btn">Login</a></Link>
                </div>
            </div>


            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold mb-4">Login your account</h1>
                
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
 )
}

export default Register