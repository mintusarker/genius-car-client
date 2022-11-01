import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-10'>
                <p className='my-5 text-2xl text-orange-600 font-semibold'>Service</p>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p className='my-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                 services.map(service => <ServiceCard
                 key ={service._id}
                 service = {service}
                 ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;