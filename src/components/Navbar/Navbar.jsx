import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = <>

        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>Shop</Link>
        </li>
        <li>
            <Link>About Us</Link>
        </li>
        <li>
            <Link>News</Link>
        </li>
        <li>
            <Link>Contact</Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-white max-w-[1200px] mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a href='#' className=" text-3xl font-bold">Bike Dekho</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-xl font-medium">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="bg-[#E76F51] text-white px-8 pt-2 pb-3 rounded-md text-xl font-medium cursor-pointer hover:bg-white border border-[#E76F51] duration-500 hover:text-[#E76F51]">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;