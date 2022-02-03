import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceConfused, faSquareLeft } from '@fortawesome/pro-solid-svg-icons';
import { BaseFooter } from '../components/footer/footer';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="page">
            <main>
                <FontAwesomeIcon icon={faFaceConfused} />
                <h3>Uh oh! There's nothing here!</h3>
                <p>Looks like we got lost somewhere...</p>
                <button onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faSquareLeft} />
                    Go Back
                </button>
            </main>
            <BaseFooter />
        </div>
    )
}