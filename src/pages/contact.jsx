import React from 'react';
import { BaseFooter } from '../components/footer/footer';
import { ReactComponent as ContactIllustration } from '../images/undraw_contact_us_re_4qqt.svg';
import { ReactComponent as Logo } from '../TRDigiLogoSolid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faMobileScreen } from '@fortawesome/pro-solid-svg-icons';

export const Contact = () => {

    return (
        <div className="page">
            <main className="contactPage">
                <div className="contactInfo">
                    <Logo className="logo" />
                    <h3>Contact Meeeeee</h3>
                    <FontAwesomeIcon icon={faAt} /> 
                    <p>contact@tabithariley.digital</p>
                    <FontAwesomeIcon icon={faMobileScreen} /> 
                    <p>+44 (0) 739 472 8972</p>
                </div>
                <ContactIllustration />
            </main>
            <BaseFooter />
        </div>
    )
}