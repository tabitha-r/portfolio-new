import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceConfused, faSquareLeft } from '@fortawesome/pro-solid-svg-icons';
import './notFound.css';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="page">
            <main className="notFound">
                <div>
                    <FontAwesomeIcon 
                        icon={faFaceConfused}
                        className="icon"
                    />
                    <h3>Uh oh! There's nothing here!</h3>
                    <p>Looks like we got lost somewhere...</p>
                    <button onClick={(e) => handleClick(e)}>
                        <FontAwesomeIcon 
                            icon={faSquareLeft}
                            className="icon"
                        />
                        Go Back
                    </button>
                </div>
            </main>
        </div>
    )
}