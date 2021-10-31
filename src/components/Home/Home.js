import React from 'react';
import Banner from '../Banner/Banner';
import Main from '../Main/Main';
import Navigation from '../Navbar/Navigation';
import TopDestination from '../TopDestintion/TopDestination';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Main></Main>
            <TopDestination></TopDestination>

        </div>
    );
};

export default Home;