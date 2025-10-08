import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FiDownload } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { MdPreview } from "react-icons/md";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const appDetails = () => {
    const {id} = useParams();
    const appData = useLoaderData();
    const sApp = appData.find(app => app.id == id);
    return (
        <div>
            <div className='flex gap-20 items-center m-10'>
                <img className='h-[350px] w-[350px]' src={sApp.image} alt={sApp.title} />
                <div>
                    <h2 className='text-3xl mb-3'>{sApp.title}</h2>
                    <p className='text-gray-500 mb-7'>Developed By: <span className='text-purple-600'>{sApp.companyName}</span></p>
                    <div className='flex gap-10 mb-4'>
                       <div>
                        <span className='text-3xl text-green-600'><FiDownload /></span>
                       <span className='text-gray-500'>Downloads</span>
                       <br />
                       <span className='text-3xl'>{sApp.downloads}</span>
                       </div>
                       <div>
                        <span className='text-3xl text-amber-500'><CiStar /></span>
                       <span className='text-gray-500'>Average Rating</span>
                       <br />
                       <span className='text-3xl'>{sApp.ratingAvg}</span>
                       </div>
                       <div>
                        <span className='text-3xl text-purple-600'><MdPreview /></span>
                       <span className='text-gray-500'>Total Reviews</span>
                       <br />
                       <span className='text-3xl'>{sApp.reviews}</span>
                       </div>
                    </div>
                    <p className='btn btn-accent'>Install Now ({sApp.size}MB)</p>
                </div>
            </div>

           <div className='mb-12'>
            <h1 className='font-bold text-2xl ml-16'>Rating</h1>
            <div className='w-[100%] h-[300px]'>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                  <BarChart layout = "vertical" data={sApp.ratings} margin={{top: 20, right: 30, left: 50, bottom: 5}}>
                    <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
                       <XAxis type='number'></XAxis>
                       <YAxis type='category' dataKey={'name'}></YAxis>
                       <Tooltip></Tooltip>
                       <Bar dataKey={'count'} fill='orange'></Bar>
                  </BarChart>
                </ResponsiveContainer>
            </div>
           </div>

           <div className='mb-12'>
            <h1 className='font-bold text-2xl ml-16 mb-2'>Description</h1>
            <p className='ml-16 text-gray-500'>{sApp.description}</p>
           </div>
        </div>
    );
};

export default appDetails;