import React, { useEffect, useState } from 'react';

const Scholars = () => {
    const [scholars, setScholars] = useState([])
    console.log(scholars, 'scholars');
    useEffect(() => {
        fetch('https://art-and-craft-server-alpha.vercel.app/our_scholars')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setScholars(data)
            })
    }, [])
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10'>
                {
                    scholars?.map(craftItem => <>
                        <div className='bg-[#5da6e3]  p-4 rounded-md hover:border-2 border-[#ffec17]'>
                            <div className='h-60 w-60 mx-auto mb-5'>
                                <img className='w-full h-full rounded-full' src={craftItem.image} alt="" />
                            </div>

                            <div className='text-2xl font-bold text-center'>
                                <h2>{craftItem.Name}</h2>
                                <h2>{craftItem.post}</h2>
                                <h2>{craftItem.company}</h2>
                                
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Scholars;