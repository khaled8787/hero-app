import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
      
        
            <div className='bg-gray-950 w-full h-50 mb-0'>


              <div className='flex justify-between mt-10 mx-10 text-white pt-10'>
                <div className='flex items-center gap-2'>
                  <img className='h-[40px] w-[40px]' src="/src/assets/logo.png" alt="" />
                  <a className="text-xl text-purple-700 font-bold">HERO.IO</a>
                </div>
                <div className='text-white'>
                     <h4 className='text-xl font-semibold'>Social Links</h4>
                     <div className='flex gap-4'>
                      <CiFacebook /> 
                      <FaLinkedin />
                      <FaXTwitter />
                      </div>
                </div>
                </div>


              </div>
            
        
    );
};

export default Footer;