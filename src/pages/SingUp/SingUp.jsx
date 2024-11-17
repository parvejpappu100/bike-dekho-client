import React from 'react';
import img from "../../assets/images/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className='max-w-[1200px] px-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-5 my-20'>
            <div className='md:w-2/4 w-full flex items-center justify-center'>
                <img src={img} alt='' />
            </div>
            <div className='w-full md:w-2/4 lg:w-2/5 py-10 border md:mr-2'>
                <h3 className='text-center text-3xl font-semibold'>Sing Up</h3>
                <form  className='w-4/5 lg:w-2/3 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name='name' required className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Email</span>
                        </label>
                        <input type="text" placeholder="Your email" name='email' required className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" name='password' required className="input input-bordered " />
                    </div>
                    <input type="submit" value="Sing Up" className='w-full btn border-0 normal-case hover:bg-[#FF3811] hover:text-white bg-[#FF3811] text-white py-3 my-5 rounded-md font-semibold' />
                </form>
                <div className='w-2/3 mx-auto'>
                    <h6 className='text-center my-3 font-semibold'>Or sing with</h6>
                    <div className='flex gap-10 items-center justify-center my-5'>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaLinkedinIn></FaLinkedinIn></button>
                        <button className='rounded-full bg-[#F5F5F8] p-4 text-[#3B5998]'><FaGoogle></FaGoogle></button>
                    </div>
                    <p className='text-center'>Already have an account ? <Link to="/login" className='text-red-500 font-semibold'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;