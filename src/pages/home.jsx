import React from 'react';
import {ReactComponent as Logo} from '../TRDigiLogoSolid.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/pro-solid-svg-icons';

export const HomePage = () => {

    return (
        <div className="page homePage">
            <main>
                <Logo className="Logo" />
                <h3><span className="titleName">Tabitha Riley</span>.Digital</h3>
            </main>
            <section className="homeCta">
                <h4>It's Time to Get Online</h4>
                <p>Have a custom website built just for you with everything you need.</p>
                <Link to="/contact"><button><span className="ctaIcon"><FontAwesomeIcon icon={faThumbsUp} /></span>Get Started</button></Link>
            </section>
        </div>
    )
}