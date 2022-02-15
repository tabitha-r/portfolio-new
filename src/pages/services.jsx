import React from 'react';
import { Link } from 'react-router-dom';
import { BaseFooter } from '../components/footer/footer';

export const Services = () => {

    return (
        <div className="page">
            <h3>Services</h3>
            <p>I can make shit.</p>
            <Link to ="/doesntexist">Let's Error 404</Link>
            <p>Almost everything needs an online presence nowadays, and all the moreso due to the pandemic. The importance of your digital presence is at an all-time high. Making sure you have the right site for your needs should be a priority.</p>
                            <p>There are many options online for creating your own site, using builders and pre-made themes. For many people, that is enough. It meets their needs, is not difficult to set up and maintain, and looks professional. Yet, those builders are often limiting you and overcharging you. Not to mention with the increase in people using such builders, it isn't difficult for multiple sites in the same niche or market to use the same templates. It's like turning up to a party and someone is wearing the same outfit!</p>
                            <p>You're unique, so your site should be too.</p>
                            <p>Having a custom site built from scratch by a web developer means you have 100% control over how your site looks, and what it can do. The only limits are the capabilities of your developer and the features currently available to the coding languages of websites. You're also not tied to a specific website host, so you can shop around to find a host that suits you as well as your budget.</p>
                            <p>Contact me today and we can get started on building your digital home exactly the way you want it.</p>
            <BaseFooter />
        </div>
    )
}