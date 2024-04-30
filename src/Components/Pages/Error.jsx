import React from 'react';
import Navbar from '../Navbar/Navbar';

const Error = () => {
    return (<>
    <Navbar></Navbar>
        <div className='h-[calc(screen - 5rem)]  text-gray-200 flex flex-col items-center justify-center '>
            <h1 className='text-4xl font-extrabold text-gray-200'>404</h1>
            <h1 className='text-2xl'>Page not found</h1>
        </div>
    </>

    );
};

export default Error;