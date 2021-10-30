import React from 'react';
import Banner from '../Banner/Banner';
import Main from '../Main/Main';
import Navigation from '../Navbar/Navigation';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Main></Main>

        </div>
    );
};

export default Home;