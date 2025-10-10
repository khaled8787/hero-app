import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
         <div className='flex flex-col justify-center items-center gap-4 mt-10 mx-8'>
            <img src="/src/assets/error-404.png" alt="" />
            <h1 className='text-4xl'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={'/'}><button className='btn btn-primary'>Go Back</button></Link>
        </div>
    );
};

export default Errorpage;