import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {


    const [sliders, setSlider] = useState([]);

    useEffect(() => {
        fetch("/bannerSlider.json")
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])

    return (
        <div className='mt-20 max-w-[1200px] mx-auto px-4 bg-[#E76F51] bg-opacity-10 py-16 rounded-md'>
            <div className='px-16'>
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper">
                    {sliders.map(slider => <SwiperSlide
                        key={slider._id}
                    >
                        <div className='flex flex-col lg:flex-row lg:gap-10  lg:px-0 justify-between lg:container  mx-auto items-center '>
                            <div className='w-full'>
                                <p className='text-red-500'>Big sale offer</p>
                                <h3 className='text-2xl my-3 md:my-0 lg:text-5xl font-semibold'>{slider.title}</h3>
                                <p className=' my-4'>{slider.details}</p>
                                <Link to={`/shop/${slider?.category}`}>
                                    <button className='bg-[#E76F51] text-white px-8 pt-2 pb-3 rounded-md text-xl font-medium cursor-pointer hover:bg-white border border-[#E76F51] duration-500 hover:text-[#E76F51]'>
                                        <span>Shop Now</span>
                                    </button>
                                </Link>
                            </div>
                            <div className='lg:w-full'>
                                <img className='' src={slider.image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;