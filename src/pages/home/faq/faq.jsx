/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import './faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircleQuestion, faMoneyBillWave, faFaceSmile, faGraduationCap, faCrystalBall, faClock, faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Faq = () => {
    const [faqMenu, setFaqMenu] = useState('main');
    const [faqMenuHeight, setFaqMenuHeight] = useState('500px');

    const calcFaqHeight = () => {
        if (faqMenu === 'main') {
            setFaqMenuHeight('500px');
        } else if (faqMenu === 'q2') {
            setFaqMenuHeight('600px')
        } else if (faqMenu === 'q5') {
            setFaqMenuHeight('500px')
        } else {
            setFaqMenuHeight('400px')
        }
    }

    return (
        <div 
            className="faqBox"
            css={css`
                height: ${faqMenuHeight};
            `}
        >
            <h3>
                <FontAwesomeIcon 
                    icon={faCircleQuestion} 
                    className="faq-icon"
                />
                Frequently Asked Questions
            </h3>
            <div className="faqs">
                <CSSTransition
                    in={faqMenu === 'main'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-primary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('q1')}
                        >
                            <FontAwesomeIcon
                                icon={faMoneyBillWave}
                                className="faq-icon"
                                fixedWidth
                            />
                            How much do you charge?
                            <FontAwesomeIcon icon={faArrowRight} className="faq-icon icon-right" />
                        </div>
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('q2')}
                        >
                            <FontAwesomeIcon
                                icon={faClock}
                                className="faq-icon"
                                fixedWidth
                            />
                            What is the usual turnaround?
                            <FontAwesomeIcon icon={faArrowRight} className="faq-icon icon-right" />
                        </div>
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('q3')}
                        >
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="faq-icon"
                                fixedWidth
                            />
                            Where are you based?
                            <FontAwesomeIcon icon={faArrowRight} className="faq-icon icon-right" />
                        </div>
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('q4')}
                        >
                            <FontAwesomeIcon
                                icon={faFaceSmile}
                                className="faq-icon"
                                fixedWidth
                            />
                            Who are you?
                            <FontAwesomeIcon icon={faArrowRight} className="faq-icon icon-right" />
                        </div>
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('q5')}
                        >
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="faq-icon"
                                fixedWidth
                            />
                            Where did you study?
                            <FontAwesomeIcon icon={faArrowRight} className="faq-icon icon-right" />
                        </div>
                        <div 
                            onClick={() => setFaqMenu('q6')}
                            className="faq-menu-item"
                        >
                            <FontAwesomeIcon
                                icon={faCrystalBall}
                                className="faq-icon"
                                fixedWidth
                            />
                            Can you tell me my future?
                            <FontAwesomeIcon icon={faArrowRight} className="faq-icon icon-right" />
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={faqMenu === 'q1'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-secondary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('main')}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="faq-icon"
                            />
                            Go Back
                        </div>
                        <div className="faq-response">
                            <h4>
                                How much do you charge?
                                <FontAwesomeIcon 
                                    icon={faMoneyBillWave} 
                                    className="faq-icon icon-right"
                                />
                            </h4>
                            <p>My usual rate is £35 per hour. This is not on top of a project package, but if you want additional revisions then the time will be charged at this rate.</p>
                            <p>Additional design work is charged at £55 per hour.</p>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={faqMenu === 'q2'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-secondary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('main')}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="faq-icon"
                            />
                            Go Back
                        </div>
                        <div className="faq-response">
                            <h4>
                                What is the usual turnaround?
                                <FontAwesomeIcon 
                                    icon={faClock} 
                                    className="faq-icon icon-right"
                                />
                            </h4>
                            <p>It can depend entirely on the project. If you just want a simple one-page site made with HTML and CSS that you already have a design in mind for then it can be coded in less than two-hours.</p>
                            <p>However, if you want a more complex single-page application with numerous components and design work then it can take anywhere between a few working days to multiple weeks.</p>
                            <p>For a better idea, you can <Link to="/contact">drop me an e-mail or give me call</Link>.</p>
                            
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={faqMenu === 'q3'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-secondary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('main')}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="faq-icon"
                            />
                            Go Back
                        </div>
                        <div className="faq-response">
                            <h4>
                                Where are you based?
                                <FontAwesomeIcon 
                                    icon={faLocationDot} 
                                    className="faq-icon icon-right"
                                />
                            </h4>
                            <p>I am based in the North West of England.</p>
                            <p>However, thanks to the magic of the Internet, I can work remotely with you regardless of where you are.</p>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={faqMenu === 'q4'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-secondary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('main')}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="faq-icon"
                            />
                            Go Back
                        </div>
                        <div className="faq-response">
                            <h4>
                                Who are you?
                                <FontAwesomeIcon 
                                    icon={faFaceSmile} 
                                    className="faq-icon icon-right"
                                />
                            </h4>
                            <p>Hi! I'm Tabitha. I'm originally an actor, but thanks to a certain pandemic I've entered the world of website design and development.</p>
                            <p>For more information about me, check out the <Link to="/about">about page</Link>.</p>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={faqMenu === 'q5'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-secondary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('main')}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="faq-icon"
                            />
                            Go Back
                        </div>
                        <div className="faq-response">
                            <h4>
                                Where did you study?
                                <FontAwesomeIcon 
                                    icon={faGraduationCap} 
                                    className="faq-icon icon-right"
                                />
                            </h4>
                            <p>I self-taught myself how to code since my early teens, with the odd little bit of HTML and CSS. I started studying Full-Stack Engineering in earnest in late-2021 through <a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">Codecademy <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>.</p>
                            <p>I did go to the Arts University Bournemouth and have a First Class Honours Degree in Acting.</p>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={faqMenu === 'q6'}
                    unmountOnExit
                    timeout={500}
                    classNames="faq-menu-secondary"
                    onEnter={calcFaqHeight}
                >
                    <div className="faq-menu">
                        <div 
                            className="faq-menu-item"
                            onClick={() => setFaqMenu('main')}
                        >
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="faq-icon"
                            />
                            Go Back
                        </div>
                        <div className="faq-response">
                            <h4>
                                Can you tell me my future?
                                <FontAwesomeIcon 
                                    icon={faCrystalBall} 
                                    className="faq-icon icon-right"
                                />
                            </h4>
                            <p>Funny you should ask.</p>
                            <p>If you follow <a href="http://www.tabithariley.digital/tarot/" target="_blank" rel="noreferrer">this link <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a> then you can play around with one of my early web projects: a random Tarot reading generator.</p>
                            <p>To see some of my other projects, have a look at <Link to="/portfolio">my portfolio</Link>.</p>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default Faq;