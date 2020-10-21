import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData/ServicesData';


const Services = () => {
    const [services, setServices] = useState([]);
    const [redirect, setRedirect] = useState();

    // Database
    useEffect(() => {
        fetch("https://shielded-refuge-74582.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setRedirect(true)
            })
    }, [redirect]);

    return (
        <div className="container" id="service">
            {services.length === 0 && <h3 align="center"> Loading............ </h3>} <br />
            <h3 align="center"><b> Provide awesome <strong className="text-warning"> services </strong> </b></h3>
            <div className="d-flex justify-content-center">
                <div className="mx-auto w-100 row mt-2 pt-5">
                    {
                        services.map(service => <ServicesData service={service} key={service.name}></ServicesData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;