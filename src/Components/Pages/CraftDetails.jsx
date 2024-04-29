import React, { useContext, useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {
    const craftItemDetail = useLoaderData()
    console.log(craftItemDetail, 'detail');
    const { fullName, email, productName, price, subCategoryName, rating, customization, imageUrl, processingTime, stockStatus, description } = craftItemDetail
    console.log(imageUrl, 'image');



    return (

        <div className='container mx-auto  h-screen'>
            <div className='bg-[#413e25] flex flex-col md:flex-row gap-7 py-8 justify-around items-center '>
                <div className='w-full md:w-1/2'>
                    <img className='w-full rounded-md' src={imageUrl} alt="" />
                </div>

                <div className='w-full md:w-1/2 space-y-4 p-3'>
                    <div>
                        <h1 className='text-3xl md:text-4xl font-bold text-amber-500'>{productName}</h1>
                        <h1 className='text-2xl text-amber-600'>{subCategoryName}</h1>
                    </div>
                    <hr />

                    <div className='space-y-3'>
                        <h1><span className='text-[#cec253] font-bold text-2xl'>Customization:</span> <span className='text-xl text-[#f589a2] font-bold'>{customization}</span></h1>

                        <h3 className=''><span className='text-[#cec253] font-bold text-2xl'>Processing time: </span> <span className='text-[#f589a2] font-bold'>{processingTime}</span></h3>

                        <h3><span className='text-[#cec253] font-bold text-2xl'>Stock:</span>  <span className='text-[#f589a2] font-bold'>{stockStatus}</span></h3>
                        <h3><div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div> {rating}</h3>
                    </div>
                    <hr />

                    <div>
                        <h3 className='text-gray-300'>{description}</h3>
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold flex items-center text-amber-400'><span><FaDollarSign /></span>{price}</h1>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CraftDetails;