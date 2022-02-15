import React from 'react';
import { DisplaySkills } from '../../components/skills/skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/pro-solid-svg-icons';
import './about.css';
import portrait from '../../images/tabitha-r.jpeg';
import StudyingIcons from './studying';

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
            <div className="aboutContent">
                <div className="rightCont">
                    <h2>Tabitha Riley</h2>
                    <p className="subtitle">Web Dev</p>
                    <main>
                        <h3>About</h3>
                        <section className="bio">
                            <div className="text">
                                <p>Hi, my name is Tabitha and I am a Full-Stack Engineer in training.</p>
                                <p>That's just nerd-talk for I make websites.</p>
                                <p>I've been playing around with making simple websites since my early teens, and I've always enjoyed seeing what websites can (and can't) do! In late 2021, I started studying web development in earnest.</p>
                                <p>Originally I graduated from the Arts University Bournemouth with a degree in Acting. However, a certain pandemic meant I needed to look into other career avenues. During my degree I had to call on my old website-building skills acting portfolio sites and production marketing/ticket sales sites, and it reminded me how fun websites are to create and how important they are in the modern day.</p>
                                
                            </div>
                            <div className="photoContainer">
                            </div>
                        </section>
                    </main>
                    <h4>Certifications</h4>
                    <section className="certificates">
                        <div className="text">
                            <p>Here be fancy things</p>                              
                        </div>
                    </section>
                    <h4>Studying</h4>
                    <section className="studying">
                        <div className="text">
                            <p>These are the technologies I am currently studying, or plan to study in the near future.</p>     
                            <StudyingIcons />                         
                        </div>
                    </section>
                </div>
                <aside>
                    <h4 className="skillsTitle">Skills</h4>
                    <p className="instruction">Click the card to open a new tab.</p>
                    <DisplaySkills />
                </aside>
            </div>
            <footer className="aboutFooter">
                <p className="blockedOut">Lorem</p>
                <p className="blockedOut">Ipsum dolor</p> 
                <p className="blockedOut">consectetur</p> 
                <p>&#169; Tabitha Riley 2022</p>
            </footer>
        </div>
    )
}