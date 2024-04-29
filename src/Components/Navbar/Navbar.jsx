import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TextileContext } from '../../Context/TextileProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { logOutUser, user } = useContext(TextileContext)
    const navigate = useNavigate()
    console.log(user, 'user paici');

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all_art_and_crafts">All Art & crafts</NavLink></li>
        <li><NavLink to="/add_craft_item">Add Craft Item</NavLink></li>
        <li><NavLink to="/my_art_and_craft">My Art & Craft</NavLink></li>
    </>

    const handleSignOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "log out successfully",
                    showConfirmButton: false,
                    timer: 1000,
                });
                console.log('log out successfully');
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className='container mx-auto flex justify-between items-center'>
            <div className='w-1/5 mt-6 hidden lg:block'>
                <Link to="/"><h1 className='text-2xl md:text-4xl text-white font-extrabold pl-3'>Art &<br /> Heritage</h1></Link>
            </div>

            <div className='w-full lg:w-4/5'>

                <div className='hidden lg:block'>
                    <div className='flex flex-col lg:flex-row items-center justify-between text-white mb-2'>
                        <div>
                            <ul className='flex lg:gap-6'>
                                <li>About  </li>
                                <li>Site</li>
                                <li>Map Brand</li>
                                <li>Contact</li>
                                <li>Feedback</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-amber-600 font-bold'>Monday - Friday: 8:00 AM - 9:00 PM</h3>
                        </div>
                        <div>
                            <p>Call and take more info:</p>
                            <p className='text-2xl text-amber-600 font-bold'>+00 544-213-615</p>
                        </div>
                    </div>
                </div>

                <div className="mb-6 navbar bg-base-100 lg:rounded-l-md">

                    {/* <div className='w-1/5 mt-6 lg:hidden'>
                        <Link to="/"><h1 className='text-xl lg:text-4xl text-gray-700 lg:text-white font-extrabold pl-3'>Art &<br /> Heritage</h1></Link>
                    </div> */}
                    <div className="navbar-start z-10 lg:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[1rem]">
                                {navlinks}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-[1rem] md:text-2xl font-bold">Art &<br />Heritage</a>
                    </div>


                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 text-[1rem] font-semibold">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="w-full navbar-end text-right gap-5">
                        {user ? <>
                            <div className="w-14 h-14 border-2 border-orange-400 rounded-full p-[2px] dropdown dropdown-left dropdown-hover">

                                <img title={user.displayName} className='w-full h-full rounded-full' src={user.photoURL} alt="" />

                                <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Profile</a></li>
                                    <li><a>Update Profile</a></li>
                                    <li><button onClick={handleSignOut} className=' bg-amber-400'>Logout</button></li>

                                </ul>
                            </div>

                        </> :
                            <>
                                <NavLink to={'/login'}><button className='btn bg-amber-600 text-white font-bold '>Login</button></NavLink>
                                <NavLink to={'/sign_up'}><button className='btn bg-amber-600 text-white font-bold '>Sign Up</button></NavLink>
                            </>}


                    </div>
                </div>
            </div>

        </div>

    );
};

export default Navbar;