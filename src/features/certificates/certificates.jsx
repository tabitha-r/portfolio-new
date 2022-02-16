import React from 'react';
import Certificate from './certificate';
import './certificates.css';

const CertificatesContainer = () => {

    return (
        <div className="allCerts">
            <Certificate src='digitalmarketing' name='Digital Marketing' />
            <Certificate src='html' name='HTML' />
            <Certificate src='css' name='CSS' />
            <Certificate src='cssinjs' name='CSS-in-JS' />
            <Certificate src='sass' name='Sass' />
            <Certificate src='js' name='JavaScript' />
            <Certificate src='interactivejs' name='Interactive JavaScript' />
            <Certificate src='reactcert' name='React' />
            <Certificate src='reactrouter' name='React Router' />
            <Certificate src='redux' name='Redux' />
            <Certificate src='colourdesign' name='Colour Design' />
            <Certificate src='responsivedesign' name='Responsive Design' />
            <Certificate src='navdesign' name='Navigation Design' />
            <Certificate src='php' name='PHP' />
            <Certificate src='regex' name='Regular Expressions' />
            <Certificate src='jstesting' name='JavaScript Unit Testing' />
            <Certificate src='jsdebug' name='Debugging JavaScript' />
            <Certificate src='git' name='Git & GitHub' />
            <Certificate src='commandline' name='Command Line' />
            <Certificate src='degree' name='Acting Degree' />
        </div>
    )
}

export default CertificatesContainer;