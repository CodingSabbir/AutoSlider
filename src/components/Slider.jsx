import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
const Slider = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2014/11/25/16/32/drop-545377_1280.jpg",
       "https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_1280.jpg",
       "https://cdn.pixabay.com/photo/2024/02/22/09/07/sunset-8589496_1280.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div>
            <div
                className="elementor-background-slideshow__slide__image h-[500px] w-full bg-cover bg-center  left-0 z-0"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
                <h1 className='text-[50px] text-white text-center pt-20'>Love where you're going</h1>
                <p className='text-white text-2xl text-center py-2'>Book incredible things to do around the world.</p>
                <div className='bg-white mx-20 px-5 py-3 rounded-full mt-10 flex justify-between'> 
                    <div className='flex items-center gap-4 '>
                        <div><i className='text-xl text-black '><FaMapMarkerAlt /></i></div>
                        <div>
                            <h3 className='text-xl text-black px-3'>Loaction</h3>
                            <input className=" outline-none px-3 py-2" type="text" placeholder='Where are you going'  />
                        </div>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <div><i className='text-xl text-black '><SlCalender /></i></div>
                        <div>
                            <h3 className='text-xl text-black px-3'>Date</h3>
                            <p className=" outline-none px-3 py-2" >Add Date</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <div><i className='text-xl text-black '><SlCalender /></i></div>
                        <div>
                            <h3 className='text-xl text-black px-3'>Check Out</h3>
                            <input className=" outline-none px-3 py-2" type="text" placeholder='Where are you going'  />
                        </div>
                    </div>
                    <button className='text-2xl bg-[#FFA82E] px-8 py-3 rounded-full text-white'>Search</button>
                </div>
            </div>
            
        </div>
        
    );
};

export default Slider;
