import React, { useContext, useEffect, useState } from 'react';
import { TextileContext } from '../../Context/TextileProvider';
import { FaDollarSign } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CraftItems = () => {
    const { craftItems} = useContext(TextileContext)
    const [updatedCraftItem, setUpdatedCraftItem] = useState([])
    console.log(updatedCraftItem, 'home all raft');

    useEffect(() => {
        setUpdatedCraftItem(craftItems)
    }, [craftItems])

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://art-and-craft-server-alpha.vercel.app/craft_items/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingCraftItem = updatedCraftItem.filter(singleCraft => singleCraft._id !== _id)

                        setUpdatedCraftItem(remainingCraftItem)
                    })

            }
        });

    }



    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl text-amber-500 font-bold text-center mb-6'>We have aesthetic and different type of craft items</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10'>
                {
                    updatedCraftItem?.map(craftItem => <>
                        <div key={craftItem._id} className='bg-[#f5bf69]  p-4 rounded-md hover:border-2 border-[#ffec17]'>
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

export default CraftItems;