import React, { useContext, useEffect, useState } from 'react';
import { TextileContext } from '../../Context/TextileProvider';
import { FaDollarSign } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const CategoryBased = () => {
    const {categoryArt} = useContext(TextileContext)
    const [selectedCat, setSelectedCat] = useState([])
    console.log(selectedCat, 'selected');
    useEffect(() => {
        fetch(`https://art-and-craft-server-alpha.vercel.app/category_based_item/${categoryArt}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSelectedCat(data)
            })
    }, [categoryArt])
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10'>
                {
                    selectedCat?.map(craftItem => <>
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

export default CategoryBased;