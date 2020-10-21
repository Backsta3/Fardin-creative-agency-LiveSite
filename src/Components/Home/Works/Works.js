import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import  Carousel  from 'react-elastic-carousel';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './Works.css'

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3}
];
const Works = () => {
    return (
        <div className="servicesSec mb-5" id="carousel">
            <div className="mt-5 p-5 text-light"><h3 className="mt-4" align="center"><b> Here are Some of <strong className="text-warning">Our Works</strong></b></h3></div>
            <div className="container carouselEdit">
            <Carousel breakPoints = {breakPoints}>
                <div className="carStyle p-1">
                    <img style={{width: "280px"}} src={carousel1} alt="" />
                </div>
                <div className="carStyle p-1">
                    <img style={{width: "280px"}} src={carousel2} alt=""  />
                </div>
                <div className="carStyle p-1">
                    <img className="rounded" style={{width: "280px"}} src={carousel3} alt=""  />
                </div>
                <div className="carStyle p-1">
                    <img style={{width: "280px"}} src={carousel4} alt=""  />
                </div>
                <div className="carStyle p-1">
                    <img style={{width: "280px"}} src={carousel5} alt=""  />
                </div>
            </Carousel>
            </div>
        </div>
    );
};

export default Works;