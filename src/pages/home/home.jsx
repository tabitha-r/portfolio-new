import React from 'react';
import { useSelector } from 'react-redux';
import {ReactComponent as Logo} from '../../TRDigiLogoSolid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/pro-solid-svg-icons';
import './home.css';
import { selectDarkMode } from '../../store/darkModeSlice';
import face from '../../images/Tabitha-Riley.png';
import FadeInSection from '../../features/fadeIn/fadeIn';
import PortfolioExamples from './portfolio/portfolioExamples';
import Packages from './packages/packages';
import MainCta from './ctas/mainCta';
import FloatingIcons from '../../features/floatingIcons/floatingIcons';
import Faq from './faq/faq';
import FinalCta from './ctas/finalCta';

export const HomePage = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <div className="page homePage">
            <div className="topBar">
                <p>You can change to {darkMode.darkMode ? 'light' : 'dark'} mode in this menu!</p>
                <FontAwesomeIcon 
                    icon={faArrowTurnUp}
                    className="identifyMenu"
                />
            </div>
            <FloatingIcons />
            <main>
                <Logo className="Logo" />
                <h2>
                    Hi! I'm
                    <br />
                    <span className="titleName">Tabitha Riley</span>
                    <br />
                    and I make websites
                </h2>
                <img 
                    src={face}
                    alt="Tabitha Riley"
                    className="profileImg"
                />
            </main>
            <section className="ctaSection">
                <FadeInSection>    
                    <MainCta />
                </FadeInSection>
            </section>
            <div className="topDivider"></div>
            <section className="servicesSection">
                <h3>A System That Works For You</h3>
                <FadeInSection>
                    <Packages />
                </FadeInSection>
            </section>
            <div className="bottomDivider"></div>
            <section className="portfolioSection">
                <FadeInSection>
                    <h3>Stuff I've Done...</h3>
                    <PortfolioExamples />
                </FadeInSection>
            </section>
            <section className="faqSection">
                    <Faq />
            </section>
            <section className="finalCta">
                <FadeInSection>
                    <FinalCta />
                </FadeInSection>
            </section>
            <footer>
                <p>&#169; Tabitha Riley 2022. All Rights Reserved.</p>
            </footer>
        </div>
    )
}