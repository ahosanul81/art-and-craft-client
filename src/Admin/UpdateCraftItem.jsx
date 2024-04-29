import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCraftItem = () => {
    const craftItem = useLoaderData()
    console.log(craftItem, 'update');
    const {_id, fullName, email, productName, price, subCategoryName, rating, customization, imageUrl, processingTime, stockStatus, description }
    = craftItem 


    const handleUpdateCraft = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const subCategoryName = form.subCategoryName.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const imageUrl = form.imageUrl.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;

        console.log(fullName, email, productName, price, subCategoryName, rating, customization, imageUrl, processingTime, stockStatus, description);

        const craftItem = { fullName, email, productName, price, subCategoryName, rating, customization, imageUrl, processingTime, stockStatus, description }
        console.log(craftItem);

        // send craft item data to server 
        fetch(`http://localhost:5000/update_craft_item/${_id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(craftItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Updated craft item successfully",
                    showConfirmButton: false,
                    timer: 1200,
                });
            })
    }

    
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-extrabold text-amber-500 text-center mb-4'>Update craft Item</h1>

            <div className='px-16 '>
                <form onSubmit={handleUpdateCraft}>
                    <div className='grid grid-cols-3 gap-x-4'>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="price" className="block text-amber-500">Your full name </label>
                            <input readOnly type="text" name="fullName" defaultValue={fullName} id="fullName" placeholder="Full name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm  w-full">
                            <label htmlFor="email" className="block text-amber-500">Your Email</label>
                            <input readOnly type="email" name="email" defaultValue={email} id="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>


                        <div className="space-y-1 text-sm  w-full">
                            <label htmlFor="productName" className="block text-amber-500">Product Name</label>
                            <input type="text" name="productName" defaultValue={productName}id="productName" placeholder="Product Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="price" className="block text-amber-500">Product Price</label>
                            <input type="number" name="price" defaultValue={price} id="price" placeholder="Price" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="quality" className="block text-amber-500">Sub-category name</label>
                            <input type="text" name="subCategoryName" defaultValue={subCategoryName}id="subCategoryName" placeholder="Sub-category" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="price" className="block text-amber-500">Rating</label>
                            <input type="text" name="rating" defaultValue={rating} id="manufacturer" placeholder="Rating" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="customization" className="block text-amber-500">Customization</label>
                            <input type="text" name="customization" defaultValue={customization} id="customization" placeholder="Yes/No" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="imageUrl" className="block text-amber-500">Image link</label>
                            <input type="text" name="imageUrl" defaultValue={imageUrl} id="imageUrl" placeholder="Image Link" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="processingTime" className="block text-amber-500">Processing time</label>
                            <input type="text" name="processingTime" defaultValue={processingTime} id="processingTime" placeholder="Processing time" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="stockStatus" className="block text-amber-500">Stock Status </label>
                            <input type="text" name="stockStatus" defaultValue={stockStatus}id="stockStatus" placeholder="Stock status" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="description" className="block text-amber-500">Description</label>
                            {/* <input type="text" name="description" id="description" placeholder="Product description" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" /> */}
                            <textarea name="description" defaultValue={description} id="description" cols="100" rows="1" placeholder='Description write here' className="col-span-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400"></textarea>
                        </div>



                    </div>
                    <input type="submit" className='btn w-full mt-4 text-white 
                    text-xl bg-amber-500 hover:text-black' value="Update Product" />
                </form>

            </div>

        </div >
    );
};

export default UpdateCraftItem;