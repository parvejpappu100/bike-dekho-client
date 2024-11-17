import React from 'react';
import bike from "../../../assets/images/bike.png"

const FeaturedBike = () => {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto px-4'>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Fetured Bikes In This Year</h3>
            <p className='text-center text-red-500 font-semibold'>Best bike collection</p>
            <p className='w-[52px] bg-red-500 h-[2px]  mx-auto'></p>
            <div className='mt-16'>
                <img src={bike} alt="" />
            </div>
        </div>
    );
};

export default FeaturedBike;