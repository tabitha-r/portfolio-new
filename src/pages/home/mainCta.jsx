import React from 'react';
import { Link } from 'react-router-dom';
import './mainCta.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/pro-solid-svg-icons';

const MainCta = () => {

    return (
        <div className="bigCta">
            <h3>Want to stand out online?</h3>
            <Link to="/contact">
                <button>
                    <FontAwesomeIcon 
                        icon={faThumbsUp} 
                        className="icon"
                    />
                    <span>Get Started</span>
                </button>
            </Link>
        </div>
    )
}

export default MainCta;