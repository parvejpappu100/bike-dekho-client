import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const ClientSays = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("/clientSays.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='max-w-[1200px] mx-auto px-4 mt-24'>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Happy <span className='text-[#E76F51]'>Client Says</span></h3>
            <div className='mt-24'>
                <div className='mt-24 '>
                    <Swiper
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={10}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper "
                    >
                        {
                            testimonials?.map(review => <SwiperSlide
                                className='pb-8'
                                key={review._id}
                            >
                                <div className=' border p-8 '>
                                    <div className='flex justify-center items-center flex-col'>
                                        <img src={review.image} alt="" />
                                        <p className='my-3 text-center'>{review.say}</p>
                                        <h3 className='text-[#23A6F0] font-bold my-4'>{review.name}</h3>
                                        <p className='font-bold'>{review.work}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;