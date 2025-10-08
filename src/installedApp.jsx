import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getApp } from './storeData';
import { FaArrowDown } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const installedApp = () => {

    const [install, setInstall] = useState([])
    const app = useLoaderData();
    useEffect(() => {
        const storeApp = getApp();
        const parseApp = storeApp.map(id => parseInt(id));
        const filterApp = app.filter(a => parseApp.includes(a.id));
        setInstall(filterApp);
    }, [])
    return (
        <div>
            <p className='text-3xl ml-8 font-semibold mt-8 mb-4'>{install.length} Found App</p>

         <div className='ml-8'>
            {
                install.map(i => (
                    <div className='flex gap-5 mb-2 bg-gray-100 p-3 items-center'>
                        <img className='h-[80px] w-[80px] rounded-md p-3 bg-white' src={i.image} alt={i.title} />
                        <div className='flex justify-between items-center w-full'>
                            <div>
                            <h3 className='text-xl mb-3'>{i.title}</h3>
                            <div className='flex items-center gap-2'>
                                <p className='flex items-center gap-1 text-green-500'><FaArrowDown /> {i.downloads}</p>
                                <p className='flex items-center gap-1 text-amber-500'><CiStar /> {i.ratingAvg}</p>
                                <p className='text-gray-400'>{i.size} MB</p>
                            </div>
                        </div>
                           <div>
                            <p className='btn btn-accent'>Uninstall</p>
                           </div>
                        </div>
                        
                    </div>
                    
                ))
            }
         </div>
        </div>
    );
};

export default installedApp;