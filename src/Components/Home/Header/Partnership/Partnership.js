import React from 'react';
import slack from '../../../../images/logos/slack.png'
import google from '../../../../images/logos/google.png'
import uber from '../../../../images/logos/uber.png'
import netflix from '../../../../images/logos/netflix.png'
import airbnb from '../../../../images/logos/airbnb.png'

const Partnership = () => {
    return (
        <div className="container mb-5 w-80">
            <div className="row d-flex justify-content-center m-1">
                <div className="col-md-2 col-sm-3 m-2 p-2 w-100 d-flex justify-content-center"><img style={{width: "130px", height: "90%"}} src={slack} alt=""/></div>
                <div className="col-md-2  col-sm-3 m-2 p-2 w-100 d-flex justify-content-center"><img src={google} alt=""/></div>
                <div className="col-md-2 col-sm-3 m-2 p-2 d-flex justify-content-center "><img style={{width: "90px", height: "100%"}} src={uber} alt=""/></div>
                <div className="col-md-2 col-sm-3 m-2 p-2 w-100 d-flex justify-content-center"><img src={netflix} alt=""/></div>
                <div className="col-md-2 col-sm-3 m-2 p-2 w-100 d-flex justify-content-center"><img src={airbnb} alt=""/></div>
                
            </div>
        </div>
    );
};

export default Partnership;