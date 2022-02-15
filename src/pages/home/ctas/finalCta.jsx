import React from 'react';
import './finalCta.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faThumbsUp } from '@fortawesome/pro-solid-svg-icons';

const FinalCta = () => {

    return (
        <div className="finalCtaContainer">
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className="bullet"
                        />
                        Your Unique Style
                        <br />
                        <span>No risks of using the same theme or template as someone else</span>
                    </li>
                    <li>
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className="bullet"
                        />
                        Match Your Brand
                        <br />
                        <span>Use the colours, fonts, and styles you use on everything</span>
                    </li>
                    <li>
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className="bullet"
                        />
                        No Limits
                        <br />
                        <span>Don't be limited by templates or plans and get the site you want</span>
                    </li>
                </ul>
            </div>
            <div className="divRight">
                <h4>You should only have to ask.</h4>
                <Link to="/contact">
                    <button>
                        <FontAwesomeIcon 
                            icon={faThumbsUp} 
                            className="icon"
                        />
                        Contact Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FinalCta;