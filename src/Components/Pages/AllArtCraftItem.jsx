import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllArtCraftItem = () => {
    const [allCraft, setAllCraft] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/craft_items`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllCraft(data)
            })
    }, [allCraft])
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs text-gray-200">
                <thead>
                    <tr className='text-amber-400'>
                        <th></th>
                        <th>Product name</th>
                        <th>Sub-Category name</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {allCraft.map(craft => <>
                        <tr className='text-white'>
                         
                            <th>1</th>
                            <td>{craft.productName}</td>
                            <td>{craft.subCategoryName}</td>
                            <td>$ {craft.price}</td>
                            <td>{craft.stockStatus}</td>
                            <td>{craft.email}</td>
                            <Link to={`/craft_item_detail/${craft._id}`} className='w-8/12'>
                                <button className=' bg-amber-900 p-1 my-1 px-2 rounded-md text-white hover:bg-slate-950 '>View details</button>
                            </Link>
                        </tr>
                    </>)}


                </tbody>

            </table>
        </div>
    );
};

export default AllArtCraftItem;