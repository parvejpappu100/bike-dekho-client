import React, { useEffect, useState } from 'react';

const News = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto px-4 mt-24'>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Latest News</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'>
                {
                    blogs.map(blog => <div key={blog._id}>
                        <div className='border p-5 shadow'>
                            <img src={blog.image} alt="" />
                            <h3  className='text-2xl font-bold mt-5'>{blog.title}</h3>
                            <p className='my-4'>{blog.details}</p>
                            <button className='hover:bg-[#E76F51] hover:text-white px-8 pt-2 pb-3 rounded-md text-xl font-medium cursor-pointer bg-white border border-[#E76F51] duration-500 text-[#E76F51]'>
                                Purchase Now
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default News;