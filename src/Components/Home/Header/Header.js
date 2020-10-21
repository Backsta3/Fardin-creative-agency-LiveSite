import React from 'react';
import MainSec from './MainSec/MainSec';
import Navbar from './Navbar/Navbar';
import Partnership from './Partnership/Partnership';

const Header = () => {
    return (
        <section style={{marginBottom: "120px"}}>
        <div className="headerSec mb-2">
            <Navbar></Navbar>
            <MainSec></MainSec>
        </div>
            <Partnership></Partnership>
        </section>
    );
};

export default Header;