import React, { useContext, useState } from "react";
import user1 from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { signInUser, user, signInWithGoogle, resetPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [error, setError] = useState(null);

    const handleLogin = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then((res) => {

                Swal.fire({
                    title: "Login successful",
                    icon: "success"
                });
                console.log(res)
                navigate('/')
            })
            .catch((err) => setError("Please enter a valid mail or password"))

    };

    const handleGoogle = () => {
        signInWithGoogle()
            .then((res) => {
                Swal.fire({
                    title: "Login successful",
                    icon: "success"
                });
                console.log(res.user)
                navigate('/')
            })
            .catch((err) => console.log(err.message))
    }

    const handleReset = () => {

        Swal.fire({
            title: "Please check your email",
            icon: "success"
        });

        resetPassword(email)
    }

    return (
        <div className="bg-[#F3F3F3]">



            <div className="flex justify-between mx-[20%] py-[1%]">

                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/">
                                    {" "}
                                    <li className="hover:text-red-500 hover:font-semibold">Home</li>
                                </Link>
                                <li className="hover:text-red-500 hover:font-semibold">About</li>
                                <li className="hover:text-red-500 hover:font-semibold">Career</li>
                            </ul>
                        </div>
                  
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 lg:gap-4">
                            <Link to="/">
                                {" "}
                                <li className="hover:text-red-500 hover:font-semibold">Home</li>
                            </Link>
                            <li className="hover:text-red-500 hover:font-semibold">About</li>
                            <li className="hover:text-red-500 hover:font-semibold">Career</li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex gap-2 items-center">
                            <img className="w-10 h-10 mr-2 rounded-full" src={user1} alt="User" />
                            <a className="btn">Login</a>
                        </div>
                    </div>
                </div>


            </div>

            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold mb-4">Login your account</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label" onClick={handleReset}>
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                {error && <p className="text-red-500 text-base">{error}</p>}
                                <div className="form-control mt-2">
                                    <button className="btn btn-primary">Login</button>
                                </div>



                                <p>
                                    {" "}
                                    Dont have an account ?{" "}
                                    <Link className="text-blue-500" to="/register">
                                        Click here
                                    </Link>{" "}
                                </p>

                                <div className="flex justify-center">
                                    <div>
                                        <h2 className=" text-gray-700">Or Login Using</h2>
                                        <div className="flex gap-5 justify-center mt-2 text-2xl">
                                            <button className="flex gap-2 items-center  bg-gray-300 text-3xl w-full justify-center py-2 rounded-2xl" onClick={handleGoogle}>
                                                <FcGoogle />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
