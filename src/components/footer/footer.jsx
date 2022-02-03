import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/pro-solid-svg-icons';
import './footer.css';

export const BaseFooter = () => {
    
    return (
        <footer>
            <Link to="/legals/terms">Terms & Conditions</Link>
            <Link to="/legals/disclaimer">Disclaimer</Link>
            <Link to="/legals/privacy">Privacy Policy</Link>
            <Link to="/legals/accessibility">Accessibility Statement</Link>
            <p><FontAwesomeIcon icon={faCopyright} /> Tabitha Riley 2022</p>
        </footer>
    )
}