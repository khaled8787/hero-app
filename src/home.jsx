import React from 'react';
import Banner from './banner';
import App from './App';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
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
           <div className='text-center mb-10'>
            <Link to={'/apps'}><p className="btn btn-primary px-12 text-xl">All App</p></Link>
           </div>
        </div>
        
        
    );
};

export default home;