import React, { useState } from 'react';
import './faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faArrowUpRightFromSquare } from '@fortawesome/pro-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

const Faq = () => {
    const [faqMenu, setFaqMenu] = useState('main');

    return (
        <div className="faqBox">
            
            <CSSTransition
                in={faqMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="faq-menu-primary"
            >
                <div className="faq-menu">
                    <h3>Frequently Asked Questions</h3>
                    <p>Who are you?</p>
                    <p onClick={() => setFaqMenu('cost')}
                    >How much do you charge?</p>
                    <p>Why is the sky blue?</p>
                </div>
            </CSSTransition>

            <CSSTransition
                in={faqMenu === 'cost'}
                unmountOnExit
                timeout={500}
                classNames="faq-menu-secondary"
            >
                <div className="faq-menu">
                    <p
                        onClick={() => setFaqMenu('main')}
                    >Go Back</p>
                    <h4>How much?</h4>
                    <p>General</p>
                </div>
            </CSSTransition>

        </div>
    )
}

export default Faq;