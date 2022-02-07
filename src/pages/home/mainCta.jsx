import React from 'react';
import { Link } from 'react-router-dom';
import './mainCta.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/pro-solid-svg-icons';

const MainCta = () => {

    return (
        <div className="ctaContainer">
            <p className="customerProblem">You shouldn't have to fight with a builder to get the site you want.</p>
            <div className="bigCta">
                <h3>You should only have to ask.</h3>
                <Link to="/contact">
                    <button>
                        <FontAwesomeIcon 
                            icon={faThumbsUp} 
                            className="icon"
                        />
                        <span>Contact Now</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainCta;