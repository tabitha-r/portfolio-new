import React from 'react';
import { BaseFooter } from '../components/footer/footer';
import { ReactComponent as LegalsIllustration } from '../images/undraw_terms_re_6ak4.svg';

export const Legals = () => {

    return (
        <div className="page">
            <main>
                <LegalsIllustration />
                <h3>Terms & Conditions</h3>
                <p>Don't be a prat.</p>
            </main>
            <BaseFooter />
        </div>
    )
}