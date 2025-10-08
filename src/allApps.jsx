import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { CiStar } from "react-icons/ci";
const allApps = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-8'>Our All Applications</h1>
            <p className='text-gray-500 text-center mb-8'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                 {
                data.map((sData) => (
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
        </div>
    );
};

export default allApps;