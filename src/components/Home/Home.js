import React from 'react';
import Banner from '../Banner/Banner';
import Main from '../Main/Main';
import Navigation from '../Navbar/Navigation';
import Testimonial from '../Testimonial/Testimonial';
import TopDestination from '../TopDestintion/TopDestination';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Main></Main>
            <TopDestination></TopDestination>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;