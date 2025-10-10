import React, { Suspense } from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router';
import Footer from './footer';

const Root = () => {
    return (
        <Suspense fallback = {<span className="loading loading-dots loading-4xl"></span>}>
           <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </Suspense>
        
    );
};

export default Root;