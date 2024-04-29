import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const RootFile = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootFile;