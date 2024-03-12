import React from 'react';
import { MdOutlineCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaInstagram  } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
const Header = () => {
    return (
        <div className='bg-black max-w-screen-2xl mx-auto flex items-center justify-between px-20'>
            <div className='flex items-center gap-3 py-3'>
               <div className='flex items-center gap-3  text-gray-300'>
               <i><MdOutlineCall /></i>
               <p className='font-semibold'>+9174585426</p>
               </div>
               <div className='flex items-center gap-3 text-gray-300'>
                    <i><TiMessages /></i>
                    <p className='font-semibold'>explorerajasthantours@gmail.com</p>
               </div>
            </div>
            <div >
                <div className='text-gray-300 flex gap-5 text-xl'>
                <i><FiFacebook /></i>
                <i><FaInstagram /></i>
                <i><AiOutlineYoutube /></i>
                </div>
            </div>
        </div>
    );
};

export default Header;