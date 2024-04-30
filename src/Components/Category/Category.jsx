import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextileContext } from '../../Context/TextileProvider';

const Category = () => {
    const { setCategoryArt } = useContext(TextileContext)

    return (
        <div className='container mx-auto mb-9 '>
            <div className='flex  justify-center text-center mb-9'>
                <h1 className='text-2xl md:text-4xl font-bold text-amber-400 w-full  lg:w-1/3'>We have different type of Textile Art</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-10'>
                <Link to="/category_based_item" >
                    <div onClick={() => setCategoryArt('Embroidery')} className='banner-img1 h-60 rounded-lg'>
                        <h1 className='text-3xl text-slate-300 text-center  h-60 border-2  border-amber-400 rounded-lg'>Embroidery</h1>
                    </div>
                </Link>

                <Link to="/category_based_item" >
                    <div onClick={() => setCategoryArt('Knitting & Crocheting')} className='banner-img2 rounded-lg'>
                        <h1 className='text-3xl text-slate-300 text-center h-60 border-2 border-amber-400 rounded-lg '>Knitting & Crocheting
                        </h1>
                    </div>
                </Link>

                <Link to="/category_based_item" >
                    <div onClick={() => setCategoryArt('Quilting')} className='banner-img3 rounded-lg'>
                        <h1 className='text-3xl text-slate-300 text-center h-60 border-2 border-amber-400 rounded-lg'> Quilting
                        </h1>
                    </div>
                </Link>

                <Link to="/category_based_item" >
                    <div onClick={() => setCategoryArt('Tie-Dyeing')} className='banner-img4 h-60 rounded-lg'>
                        <h1 className='text-3xl text-slate-300 text-center h-60 border-2 border-amber-400 rounded-lg'>Tie-Dyeing</h1>
                    </div>
                </Link>
                <Link to="/category_based_item" >
                    <div onClick={() => setCategoryArt('Macrame')} className='banner-img5 rounded-lg'>
                        <h1 className='text-3xl text-slate-300 text-center h-60 border-2  border-amber-400 rounded-lg'>Macrame</h1>
                    </div>
                </Link>
                <Link to="/category_based_item" >
                    <div onClick={() => setCategoryArt('Beadwork')} className='banner-img6 rounded-lg'>
                        <h1 className='text-3xl text-slate-300 text-center h-60 border-2  border-amber-400 rounded-lg'>Beadwork</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Category;