import React from 'react';
import photo from "../../../assets/images/q.png";

const Faq = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 mt-24'>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Frequently Asked <span className='text-[#E76F51]'>Questions</span></h3>
            <div className='mt-24 flex items-center justify-between gap-10'>
                <div className='w-full'>
                    <img src={photo} alt="" />
                </div>
                <div className='w-full'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">What are the most important things I should
                            know about riding a bike?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">How can I tell if my helmet is old and I need a 
                            new one?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">How can I tell if my helmet is old and I need a 
                            new one?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">What rules should I follow when riding my bike?</div>
                            <div className="collapse-content">
                                <p>Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;