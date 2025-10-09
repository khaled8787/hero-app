import React from 'react';

const notFound = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-10'>
            <img src="/src/assets/App-Error.png" alt="" />
            <h1 className='text-4xl'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
        </div>
    );
};

export default notFound;