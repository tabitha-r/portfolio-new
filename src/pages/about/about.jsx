import React from 'react';
import { DisplaySkills } from '../../components/skills/skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/pro-solid-svg-icons';
import './about.css';

export const About = () => {

    return (
        <div className="page aboutPage">
            <div className="fauxNav">
                <p className="blockedOut">Lorem</p>
                <p className="blockedOut">ipsum</p>
                <p className="blockedOut">dolor</p>
                <p className="blockedOut">sit</p>
                <p className="blockedOut">amet</p>
                <p><FontAwesomeIcon icon={faCircleUser} /></p>
            </div>
            <main>
                <h3>About</h3>
                <section>
                    <div className="text">
                        <p>Hi, my name is Tabitha and I am a Full-Stack Engineer in training.</p>
                        <p>I've been playing around with static sites using HTML (Hyper Text Markup Language) and CSS (Cascading Style Sheets) since my early teens, and I've always enjoyed seeing what websites can (and can't) do! In late 2021, I started studying web development in earnest.</p>
                        <p>Originally I graduated from the Arts University Bournemouth with a First Class Honours Degree in Acting. However, a certain pandemic meant I needed to look into other career avenues. During my degree I had to call on my old website-building skills for my acting portfolio site, and it reminded me how fun websites are to create and how important they are in the modern day.</p>
                        <p>Almost everything needs an online presence nowadays, and all the moreso due to the pandemic. The importance of your digital presence is at an all-time high. Making sure you have the right site for your needs should be a priority.</p>
                        <p>There are many options online for creating your own site, using builders and pre-made themes. For many people, that is enough. It meets their needs, is not difficult to set up and maintain, and looks professional. Yet, those builders are often limiting you and overcharging you. Not to mention with the increase in people using such builders, it isn't difficult for multiple sites in the same niche or market to use the same templates. It's like turning up to a party and someone is wearing the same outfit!</p>
                        <p>You're unique, so your site should be too.</p>
                        <p>Having a custom site built from scratch by a web developer means you have 100% control over how your site looks, and what it can do. The only limits are the capabilities of your developer and the features currently available to the coding languages of websites. You're also not tied to a specific website host, so you can shop around to find a host that suits you as well as your budget.</p>
                        <p>Contact me today and we can get started on building your digital home exactly the way you want it.</p>
                    </div>
                    <div className="photoContainer">
                        <img src="https://www.tabithariley.digital/resources/images/Tabitha.png" alt="Portrait of Tabitha Riley" />
                    </div>
                </section>
            </main>
            <aside>
                <h4 className="skillsTitle">Skills</h4>
                <p className="instruction">Click the icon for more information.</p>
                <DisplaySkills />
            </aside>
            <footer className="aboutFooter">
                <p className="blockedOut">Lorem</p>
                <p className="blockedOut">Ipsum dolor</p> 
                <p className="blockedOut">consectetur</p> 
                <p>&#169; Tabitha Riley 2022</p>
            </footer>
        </div>
    )
}