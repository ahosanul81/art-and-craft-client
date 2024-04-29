import React, { useContext } from 'react';
import { TextileContext } from '../../Context/TextileProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { loading, user } = useContext(TextileContext)
    const location = useLocation()
    console.log(location, 'protected');
    if (loading) {
        return <>
            <div className='flex justify-center items-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-600"></div>
            </div>
        </>

    }
    if (user) {
        return children
    }
    
    return (<Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default ProtectedRoute;