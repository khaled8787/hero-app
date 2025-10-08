import React from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router';
import Footer from './footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;