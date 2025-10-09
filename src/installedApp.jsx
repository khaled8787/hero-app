import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getApp, removeApp } from './storeData';
import { FaArrowDown } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { toast } from 'react-toastify';


const installedApp = () => {
    const [sort, SetSort] = useState('');
const handleSort = (type) =>{
    SetSort(type);
    if(type === 'Size'){
        const sortSize = [...install].sort((a,b) => a.size - b.size);
        setInstall(sortSize);
    }
    if(type === 'Download'){
        const sortDownload = [...install].sort((a,b) => a.downloads - b.downloads);
        setInstall(sortDownload);
    }
}
    const [install, setInstall] = useState([])
    const app = useLoaderData();
    useEffect(() => {
        const storeApp = getApp();
        const parseApp = storeApp.map(id => parseInt(id));
        const filterApp = app.filter(a => parseApp.includes(a.id));
        setInstall(filterApp);
    }, []);

     const handleUnInstall = (id) =>{
        removeApp(id);
        const remainingApp = install.filter(a => a.id !== id);
        setInstall(remainingApp);
        toast.success('App Uninstalled Successfully');
     }

    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-gray-500 mt-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='mt-8 flex justify-between mx-4'>
               <p className='text-3xl ml-8 font-semibold mb-4'>{install.length} Found App</p>
               <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort By {sort ? sort : '⬇️'}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleSort('Size')}>Size</a></li>
    <li><a onClick={() => handleSort('Download')}>Download</a></li>
  </ul>
</div>
            </div>
            

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
                            <p onClick={() => handleUnInstall(i.id)} className='btn btn-accent'>Uninstall</p>
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