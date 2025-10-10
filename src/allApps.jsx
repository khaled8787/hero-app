import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { CiStar } from "react-icons/ci";
const allApps = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const filterData = data.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));

    const handleSearch = () =>{
        setLoading(true);
        if(filterData.length === 0 && search.trim() !== ''){
            navigate('/notfound');
        }
        setLoading(false);
    }
    
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-8'>Our All Applications</h1>
            <p className='text-gray-500 text-center mb-8'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div>
                
            </div>
            <div className='md:flex justify-between mx-26 mb-8'>
                <p className='text-2xl mb-2'>({data.length}) App Found</p>
               <div className='md:flex'>
                 <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
                </svg>
                <input onChange={(a) => setSearch(a.target.value)} type="search" required placeholder="Search" />
                </label>
                <button onClick={handleSearch} className='btn btn-primary'>Search</button>
               </div>
            </div>
            {
                loading ? (<div className='flex justify-center items-center'>
                  <span className='loading loading-spinner loading-lg text-primary'></span>
                </div>) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
                 {
                filterData.map((sData) => (
                    <Link to={`/appDetails/${sData.id}`}>
                    <div className="p-4 shadow-2xl w-[340px] h-[430px] mx-auto rounded-xl">
                      <img className="h-[310px] w-[310px]" src={sData.image} alt={sData.title} />
                      <br />
                      <h5 className="font-semibold text-xl">{sData.title}</h5>
                      <div className="flex justify-between">
                      <p className="flex items-center text-green-700 gap-1 bg-green-200 p-1 rounded-sm"><MdOutlineFileDownload /> {sData.downloads}</p>
                      <p className="flex items-center text-green-700 gap-1 bg-amber-200 p-1 rounded-sm"><CiStar /> {sData.downloads}</p>
                    </div>
                  </div>
                    </Link>
                ))
            }
            </div>
                )
            }
        </div>
    );
};

export default allApps;