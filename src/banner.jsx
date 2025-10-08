import React from 'react';
import { FaAppStoreIos } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Banner = () => {
    return (
        <div className='mt-20'>
            <div className='w-2/3 mx-auto text-center'>
               <h1 className='text-5xl mb-5 font-bold'>We Build <br />
                <span className='text-purple-700'> Productive</span> Apps</h1>
                <p className='text-gray-600 mb-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <a className='btn bg-white text-black border-[#e5e5e5] text-[18px] mr-2' href="https://play.google.com/store/games?hl=en&pli=1"><BiLogoPlayStore />
                Google Play</a>
                
                <a className='btn bg-white text-black border-[#e5e5e5] text-[18px]' href="https://www.apple.com/app-store/"><FaAppStoreIos />
                App Store</a>

                
                <br />
                <img className='w-[400px] md:w-[600px] mx-auto mt-5' src="/src/assets/hero.png" alt="" />
            </div>

            <div className='md:h-[300px] bg-purple-600 pb-8'>
               <div>
                <h2 className='text-center text-xl md:text-3xl text-white font-bold pt-10'>Trusted by Millions, Built for You</h2>
                <div className='flex flex-col md:flex-row md:justify-around w-3/4 mx-auto pt-5'>
                    <div className='flex flex-col gap-3'>
                         <p className='text-white'>Total Downloads</p>
                         <h1 className='text-5xl text-white'>29.6M</h1>
                         <p className='text-white'>21% more than last month</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                         <p className='text-white'>Total Reviews</p>
                         <h1 className='text-5xl text-white'>29.6M</h1>
                         <p className='text-white'>46% more than last month</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                         <p className='text-white'>Actives Apps</p>
                         <h1 className='text-5xl text-white'>29.6M</h1>
                         <p className='text-white'>31 More Will Launch</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Banner;