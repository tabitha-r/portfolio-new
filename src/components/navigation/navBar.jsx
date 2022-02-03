import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/pro-solid-svg-icons';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../TRDigiLogoSolid.svg';

export const NavBar = () => {

    return (
        <div className="browserTabs">
            <Logo className="browserLogo" />
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? "navTab activeTab" : "navTab"}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "navTab activeTab" : "navTab"}>About</NavLink>
                <NavLink to="/services" className={({isActive}) => isActive ? "navTab activeTab" : "navTab"}>Services</NavLink>
                <NavLink to="/portfolio" className={({isActive}) => isActive ? "navTab activeTab" : "navTab"}>Portfolio</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "navTab activeTab" : "navTab"}>Contact</NavLink>
            </nav>
            <div className="browserButtons">
                <FontAwesomeIcon icon={faCircle} className="greenCircle browserButton" />
                <FontAwesomeIcon icon={faCircle} className="yellowCircle browserButton" />
                <FontAwesomeIcon icon={faCircle} className="redCircle browserButton" />
            </div>
        </div>
    )
}