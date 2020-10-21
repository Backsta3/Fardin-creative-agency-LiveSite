import React from 'react';
import './MainSec.css'
import frame from '../../../../images/logos/Frame.png'
const MainSec = () => {
    return (
        <div className="container headMain">
        <div className="row d-flex align-items-center">
            <div className="col-md-4 mr-4">
                <h1><strong> Let's Grow Your <br/> Brand To The <br/> Next Level </strong></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn text-light mx-auto w-50 btnHire">Hire us</button>
            </div>
            <div className="mr-2 col-md-6 offset-md-1 p-2 headMainImg">
            <img  className="w-100 img-fluid" src={frame} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default MainSec;