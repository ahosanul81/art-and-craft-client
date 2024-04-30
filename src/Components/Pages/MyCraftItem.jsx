import React, { useContext, useEffect, useState } from 'react';
import { TextileContext } from '../../Context/TextileProvider';
import { FaDollarSign } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const MyCraftItem = () => {

    const { user } = useContext(TextileContext)
    const [myCraft, setMyCraft] = useState([])
    const [customizedYes, setCustomizedYes] = useState([])
    console.log(customizedYes, 'yes');
    const [customized, setCustomized] = useState(null)



    useEffect(() => {
        fetch(`https://art-and-craft-server-alpha.vercel.app/craft_items/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyCraft(data)

            })
    }, [user])

    useEffect(() => {
        fetch(`https://art-and-craft-server-alpha.vercel.app/my_art_and_craft/customization/${customized}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCustomizedYes(data)
            })
    }, [customized])

    return (
        <div>
            <h2 className='text-3xl text-amber-500 font-bold text-center mb-6'>We have aesthetic and different type of craft items</h2>
            <div className='flex gap-5 justify-center mb-6'>
                <button onClick={() => setCustomized('Yes')} className='btn bg-amber-800 text-xl text-white  hover:text-black'>Customized</button>
                <button onClick={() => setCustomized('No')} className='btn bg-amber-800 text-xl text-white  hover:text-black'>Not Customized</button>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10'>
                {
                    customized ? (
                        customizedYes.map(craftItem => (
                            <div key={craftItem._id} className='bg-[#e9e573] p-4 rounded-md hover:border-2 border-[#ffec17]'>
                                <div className='h-60 mb-5'>
                                    <img className='w-full h-full rounded-md' src={craftItem.imageUrl} alt="" />
                                </div>

                                <div className='space-y-3'>

                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-3xl font-bold'>{craftItem.productName}</h1>
                                        </div>
                                        <div className="dropdown dropdown-left dropdown-hover">
                                            <div tabIndex={0} role="button" className="text-3xl"><RiEdit2Fill></RiEdit2Fill></div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                                                <li><button onClick={() => handleDelete(craftItem._id)}>Delete</button></li>
                                                <li><Link to={`/update_craft_item/${craftItem._id}`}><button>Update</button></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className='flex items-center justify-between'>
                                        <p className='font-bold'>{craftItem.subCategoryName}</p>
                                        <p className='text-xl'>
                                            <span className='font-bold'>Customization:</span>
                                            <span > {craftItem.customization}</span>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='flex items-center'>
                                        <p className='flex items-center text-4xl font-bold text-pink-800'>
                                            <span className=''><FaDollarSign></FaDollarSign></span>{craftItem.price}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-4 mt-5'>
                                    <Link to={`/craft_item_detail/${craftItem._id}`} className='w-8/12'>
                                        <button className='w-full btn bg-slate-800 text-white hover:bg-slate-950 '>View details</button>
                                    </Link>
                                    <p className='w-2/12 text-5xl'><BiSolidCartAdd></BiSolidCartAdd></p>
                                    <p className='w-2/12 text-4xl'><FaShareNodes></FaShareNodes></p>

                                </div>

                                
                            </div>
                        ))
                    ) :
                        myCraft.map(craftItem => <>
                            <div className='bg-[#e9e573]  p-4 rounded-md hover:border-2 border-[#ffec17]'>
                                <div className='h-60 mb-5'>
                                    <img className='w-full h-full rounded-md' src={craftItem.imageUrl} alt="" />
                                </div>

                                <div className='space-y-3'>

                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-3xl font-bold'>{craftItem.productName}</h1>
                                        </div>
                                        <div className="dropdown dropdown-left dropdown-hover">
                                            <div tabIndex={0} role="button" className="text-3xl"><RiEdit2Fill></RiEdit2Fill></div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                                                <li><button onClick={() => handleDelete(craftItem._id)}>Delete</button></li>
                                                <li><Link to={`/update_craft_item/${craftItem._id}`}><button>Update</button></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className='flex items-center justify-between'>
                                        <p className='font-bold'>{craftItem.subCategoryName}</p>
                                        <p className='text-xl'>
                                            <span className='font-bold'>Customization:</span>
                                            <span > {craftItem.customization}</span>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='flex items-center'>
                                        <p className='flex items-center text-4xl font-bold text-pink-800'>
                                            <span className=''><FaDollarSign></FaDollarSign></span>{craftItem.price}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-4 mt-5'>
                                    <Link to={`/craft_item_detail/${craftItem._id}`} className='w-8/12'>
                                        <button className='w-full btn bg-slate-800 text-white hover:bg-slate-950 '>View details</button>
                                    </Link>
                                    <p className='w-2/12 text-5xl'><BiSolidCartAdd></BiSolidCartAdd></p>
                                    <p className='w-2/12 text-4xl'><FaShareNodes></FaShareNodes></p>

                                </div>

                            </div>
                        </>)
                }
            </div>
        </div>
    );
};

export default MyCraftItem;