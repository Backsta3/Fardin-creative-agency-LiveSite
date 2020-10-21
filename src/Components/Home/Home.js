import React from 'react';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Works from './Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Works></Works> <br/>
            <Feedback></Feedback> <br/>
            <Footer></Footer>
        </div>
    );
};

export default Home;