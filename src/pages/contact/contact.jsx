import React from 'react';
import { ReactComponent as Logo } from '../../TRDigiLogoSolid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faMobileScreen } from '@fortawesome/pro-solid-svg-icons';
import ContactForm from '../../components/contactForm/contactForm';
import './contact.css';

export const Contact = () => {

    return (
        <div className="page">
            <main className="contactPage">
                <div className="contactInfo">
                    <Logo className="logo" />
                    <h2>Contact Me</h2>
                    <p className="contactInstruct">If you have any queries, don't hesitate to get in touch.</p>
                    <div className="contactElement">
                        <FontAwesomeIcon icon={faAt} className="icon" />
                        <p>contact@tabithariley.digital</p>
                    </div>
                    <div className="contactElement">
                        <FontAwesomeIcon icon={faMobileScreen} className="icon" />
                        <p>+44 (0) 739 472 8972</p>
                    </div>
                </div>
                <ContactForm />
            </main>
        </div>
    )
}