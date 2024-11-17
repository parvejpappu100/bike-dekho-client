import React from 'react';
import Banner from '../../../components/Banner/Banner';
import FeaturedBike from '../FeaturedBike/FeaturedBike';
import News from '../News/News';
import ClientSays from '../ClientSays/ClientSays';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div className='mb-24'>
           <Banner></Banner>
           <FeaturedBike></FeaturedBike>
           <News></News>
           <ClientSays></ClientSays>
           <Faq></Faq>
        </div>
    );
};

export default Home;