import React from 'react';
import Banner from '../../../components/Banner/Banner';
import FeaturedBike from '../FeaturedBike/FeaturedBike';
import News from '../News/News';
import ClientSays from '../ClientSays/ClientSays';

const Home = () => {
    return (
        <div className='mb-24'>
           <Banner></Banner>
           <FeaturedBike></FeaturedBike>
           <News></News>
           <ClientSays></ClientSays>
        </div>
    );
};

export default Home;