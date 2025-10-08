import React from 'react';
import { useLoaderData } from 'react-router';

const allApps = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <p>hello about</p>
        </div>
    );
};

export default allApps;