import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging, faSquareLeft } from '@fortawesome/pro-solid-svg-icons';
import './comingSoon.css';

const ComingSoon = (props) => {
    const page = props.page;
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="page">
            <main className="comingSoon">
                <div>
                    <FontAwesomeIcon 
                        icon={faPersonDigging}
                        className="icon"
                    />
                    <h3>Whoops! It's not ready yet...</h3>
                    <p>The {page} page is currently under development. Please check back again later.</p>
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

export default ComingSoon;