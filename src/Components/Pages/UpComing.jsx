import React, { useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";

const UpComing = () => {
    const [upcomingItem, setUpcomingItem] = useState([])
    console.log(upcomingItem, 'upcomimg');
    useEffect(() => {
        fetch('https://art-and-craft-server-alpha.vercel.app/up_coming_item')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpcomingItem(data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-[#9269b7] text-center font-bold mb-8'>upcoming</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10'>
                {
                    upcomingItem?.map(craftItem => <>
                        <div className='bg-[#e9e573]  p-4 rounded-md hover:border-2 border-[#ffec17]'>
                            <div className='h-60 mb-5'>
                                <img className='w-full h-full rounded-md' src={craftItem.imageUrl} alt="" />
                            </div>

                            <div className='space-y-3'>

                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-3xl font-bold'>{craftItem.productName}</h1>
                                    </div>
                                    
                                </div>
                                <hr />

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>{craftItem.subCategoryName}</p>
                                    
                                </div>
                                <hr />
                                
                            </div>
                            <div className='flex justify-between items-center gap-4 mt-5'>
                                
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

export default UpComing;