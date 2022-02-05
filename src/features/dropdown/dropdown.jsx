/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDarkMode, toggleDarkMode } from '../../store/darkModeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoonStars, faSunBright, faBriefcaseBlank, faComment, faCaretRight, faCaretLeft, faCopyright, faArrowUpRightFromSquare, faListCheck, faUserShield, faHandshakeAngle, faUniversalAccess } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './dropdown.css';
import { CSSTransition } from 'react-transition-group';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);

    const [activeMenu, setActiveMenu] = useState('main'); // socials, legals
    const [menuHeight, setMenuHeight] = useState('290px');

    const calcHeight = () => {
        if (activeMenu === 'main') {
            setMenuHeight('290px');
        } else if (activeMenu === 'socials' ) {
            setMenuHeight('230px')
        } else if (activeMenu === 'legals') {
            setMenuHeight('370px')
        }
    }

    return (
        <div 
            className='dropdownContainer' 
            css={css`
                height: ${menuHeight}
            `}
        >
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                
                <div className="menu">
                    
                        <div 
                            className='menuItem'
                            onClick={() => setActiveMenu('socials')}
                        >
                            <FontAwesomeIcon icon={faComment} className="dropdownIcon" />
                            <div className='dropdownItemName'>
                                Socials
                                <br />
                                <span className='dropdownDescriptor'>
                                    Social Media Connections
                                </span>
                            </div>
                            <FontAwesomeIcon icon={faCaretRight} className="iconRight" />
                        </div>
                        <div 
                            className='menuItem'
                            onClick={() => setActiveMenu('legals')}
                        >
                            <FontAwesomeIcon icon={faBriefcaseBlank} className="dropdownIcon" />
                            <div className='dropdownItemName'>
                                Legals
                                <br />
                                <span className='dropdownDescriptor'>
                                    Policies & Statements
                                </span>
                            </div>
                            <FontAwesomeIcon icon={faCaretRight} className="iconRight" />
                        </div>
                        <div className='menuItem' onClick={() => dispatch(toggleDarkMode())}>
                            {darkMode.darkMode ? <FontAwesomeIcon icon={faSunBright} className='dropdownIcon' /> : <FontAwesomeIcon icon={faMoonStars} className='dropdownIcon' />}
                            <div className='dropdownItemName'>
                                {darkMode.darkMode ? 'Light Mode' : 'Dark Mode'}
                                <br />
                                <span className='dropdownDescriptor'>
                                    Toggle Colour Scheme
                                </span>
                            </div>
                        </div>
                        <div className='copyrightItem'>
                            <FontAwesomeIcon icon={faCopyright} className="dropdownIcon" />
                            <div className='dropdownItemName'>
                                Tabitha Riley 2022
                            </div>
                        </div>
                    
                </div>

            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'socials'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary" 
                onEnter={calcHeight}
            >

                <div className="menu">
                    
                        <div 
                            className="menuItem"
                            onClick={() => setActiveMenu('main')}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} className="dropdownIcon" />
                            <div className='dropdownItemName'>
                                Go Back
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/in/tabitha-r-a27827214/" target="_blank" rel="noreferrer">
                            <div className="menuItem">
                                <FontAwesomeIcon icon={faLinkedin} className="dropdownIcon" />
                                    <div className='dropdownItemName'>
                                        LinkedIn
                                    </div>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="iconRight" />
                            </div>
                        </a>
                        <a href="https://github.com/tabitha-r" target="_blank" rel="noreferrer">
                            <div className="menuItem">
                                <FontAwesomeIcon icon={faGithub} className="dropdownIcon" />
                                    <div className='dropdownItemName'>
                                        GitHub
                                    </div>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="iconRight" />
                            </div>
                        </a>
                    
                </div>

            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'legals'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >

                <div className="menu">
                    
                        <div 
                            className="menuItem"
                            onClick={() => setActiveMenu('main')}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} className="dropdownIcon" />
                            <div className='dropdownItemName'>
                                Go Back
                            </div>
                        </div>
                        <Link to="/legals/terms">
                            <div className="menuItem">
                                <FontAwesomeIcon icon={faListCheck} className="dropdownIcon" />
                                    <div className='dropdownItemName'>
                                        Terms & Conditions
                                    </div>
                            </div>
                        </Link>
                        <Link to="/legals/privacy">
                            <div className="menuItem">
                                <FontAwesomeIcon icon={faUserShield} className="dropdownIcon" />
                                    <div className='dropdownItemName'>
                                        Privacy Policy
                                    </div>
                            </div>
                        </Link>
                        <Link to="/legals/disclaimer">
                            <div className="menuItem">
                                <FontAwesomeIcon icon={faHandshakeAngle} className="dropdownIcon" />
                                    <div className='dropdownItemName'>
                                        Disclaimer
                                    </div>
                            </div>
                        </Link>
                        <Link to="/legals/accessibility">
                            <div className="menuItem">
                                <FontAwesomeIcon icon={faUniversalAccess} className="dropdownIcon" />
                                    <div className='dropdownItemName'>
                                        Accessibility Statement
                                    </div>
                            </div>
                        </Link>
                </div>

            </CSSTransition>
        </div>
    )
}

export default Dropdown;