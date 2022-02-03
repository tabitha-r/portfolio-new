import React from 'react';
import { Link } from 'react-router-dom';
import { BaseFooter } from '../components/footer/footer';

export const Services = () => {

    return (
        <div className="page">
            <h3>Services</h3>
            <p>I can make shit.</p>
            <Link to ="/doesntexist">Let's Error 404</Link>
            <BaseFooter />
        </div>
    )
}