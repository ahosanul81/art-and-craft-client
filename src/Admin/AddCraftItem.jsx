import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { TextileContext } from '../Context/TextileProvider';

const AddCraftItem = () => {
    const {user} = useContext(TextileContext)

    const [subCategoryName, setSubCategoryName] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleDropdownSelect = (item) => {
        setSubCategoryName(item);
        setDropdownOpen(false);
    };

    const handleAddCraft = (e) => {
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
        fetch('https://art-and-craft-server-alpha.vercel.app/craft_items', {
            method: 'POST', 
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
                    title: "Product added successfully",
                    showConfirmButton: false,
                    timer: 1000,
                });
            })
        //     fetch('https://art-and-craft-server-alpha.vercel.app/craft_items', {
        //     method: 'POST', 
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(craftItem)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-extrabold text-amber-500 text-center mb-4'>Add craft Item</h1>

            <div className='px-16 '>
                <form onSubmit={handleAddCraft}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4'>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="price" className="block text-amber-500">Your full name </label>
                            <input type="text" name="fullName" defaultValue={user.displayName} id="fullName" placeholder="Full name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm  w-full">
                            <label htmlFor="email" className="block text-amber-500">Your Email</label>
                            <input readOnly type="email" name="email" defaultValue={user.email} id="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>


                        <div className="space-y-1 text-sm  w-full">
                            <label htmlFor="productName" className="block text-amber-500">Product Name</label>
                            <input type="text" name="productName" id="productName" placeholder="Product Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="price" className="block text-amber-500">Product Price</label>
                            <input type="number" name="price" id="price" placeholder="Price" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="relative space-y-1 text-sm w-full">
                            <label htmlFor="quality" className="block text-amber-500">Sub-category name</label>
                            <input 
                            type="text" 
                            name="subCategoryName" 
                            id="subCategoryName"
                            placeholder="Sub-category" 
                            className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400"
                            onChange={(e) => setSubCategoryName(e.target.value)}
                            onFocus={() => setDropdownOpen(true)}
                            value={subCategoryName}
                            />
                            {dropdownOpen && (
                            <div className="absolute top-full bg-white w-full border border-gray-300 rounded-b-md shadow-md z-10">
                                <ul className="py-1">
                                    <li onClick={() => handleDropdownSelect('Embroidery')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Embroidery</li>
                                    <li onClick={() => handleDropdownSelect('Knitting & Crocheting')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Knitting & Crocheting</li>
                                    <li onClick={() => handleDropdownSelect('Quilting')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Quilting</li>
                                    <li onClick={() => handleDropdownSelect('Tie-Dyeing')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Tie-Dyeing</li>
                                    <li onClick={() => handleDropdownSelect('Macrame')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Macrame</li>
                                    <li onClick={() => handleDropdownSelect('Beadwork')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Beadwork</li>
                                </ul>
                            </div>
                        )}
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="price" className="block text-amber-500">Rating</label>
                            <input type="text" name="rating" id="manufacturer" placeholder="Rating" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="customization" className="block text-amber-500">Customization</label>
                            <input type="text" name="customization" id="customization" placeholder="Yes/No" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="imageUrl" className="block text-amber-500">Image link</label>
                            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image Link" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="processingTime" className="block text-amber-500">Processing time</label>
                            <input type="text" name="processingTime" id="processingTime" placeholder="Processing time" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>
                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="stockStatus" className="block text-amber-500">Stock Status </label>
                            <input type="text" name="stockStatus" id="stockStatus" placeholder="Stock status" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" />
                        </div>

                        <div className="space-y-1 text-sm w-full">
                            <label htmlFor="description" className="block text-amber-500">Description</label>
                            {/* <input type="text" name="description" id="description" placeholder="Product description" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400" /> */}
                            <textarea  name="description" id="description" cols="83" rows="1" placeholder='Description write here' className="w-full  lg:col-span-2 px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-amber-400"></textarea>
                        </div>



                    </div>
                    <input type="submit" className='btn w-full mt-4 text-white 
                    text-xl bg-amber-500 hover:text-black' value="Add Product" />
                </form>

            </div>



        </div >
    );
};

export default AddCraftItem;