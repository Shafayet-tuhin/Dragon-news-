import React, { useContext, useState } from "react";
import user from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { FaEye ,FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const { createUser , eye, setEye } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;

        console.log("checkbox", checkbox);

        if (!checkbox) {
          setError("You must agree to the terms and conditions")
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        console.log(name, email, password);

        createUser(email, password)
            .then((res) => {
                Swal.fire({
                    title: "Registration successful",
                    icon: "success",
                });

                console.log(res);
                navigate("/login");
                updateProfile(res.user, {
                    displayName: name,
                })
                    .then(() => console.log("profile name updated"))
                    .catch((er) => console.log(er.message));
            })
            .catch((er) => setError("Email is already in use"));
    };

    const handleSee = (e) => {
        e.preventDefault();
        setEye(!eye);
    }

    return (
        <div className="bg-[#F3F3F3]">
            <div className="flex justify-between mx-[20%] py-[1%]">
                <div></div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-10 text-[#706F6F] text-lg leading-7 font-normal">
                        <Link to="/">
                            <li className="hover:text-red-500 hover:font-semibold">Home</li>
                        </Link>
                        <li className="hover:text-red-500 hover:font-semibold">About</li>
                        <li className="hover:text-red-500 hover:font-semibold">Career</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <img className="w-10 h-10 mr-2" src={user} alt="User" />
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>

            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold mb-4">Register your account</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
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
                                    <div className="flex items-center gap-4">
                                        <input
                                            type= {eye ? "password": "text"}
                                            name="password"
                                            placeholder="password"
                                            className="input input-bordered"
                                            required
                                        />
                                       
                                       <button onClick={handleSee}>
                                                   {
                                                     eye ? <FaEye/> : <FaEyeSlash/>
                                                   }
                                       </button>

                                    </div>

                                    <label className=" flex gap-2 items-center py-2">
                                        <input
                                            type="checkbox"

                                            name="checkbox"
                                            className="checkbox"
                                        />
                                        <span className="label-text">
                                            Accept terms and conditions
                                        </span>
                                    </label>
                                    {error && <p className="text-red-500 text-base">{error}</p>}
                                    <p className="mt-2">
                                        
                                        Already have an account ?
                                        <Link className="text-blue-800 ml-2" to="/login">
                                            Click here
                                        </Link>
                                    </p>

                                
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
