import React from 'react';
import Banner from './banner';
import App from './App';
import { useLoaderData } from 'react-router';
const home = () => {
    const data = useLoaderData();
    return (
        <div className=''>
          <Banner></Banner>
          <div className='text-center mb-8 mt-10'>
             <h1 className='text-3xl font-semibold'>Trending Apps</h1>
          <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
          </div>
          <App data = {data}></App>
        </div>
        
        
    );
};

export default home;