import React from 'react';
import { useNavigate } from 'react-router-dom';
import './thankYou.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaperPlane } from '@fortawesome/pro-solid-svg-icons';

const ThankYou = () => {
    let navigate = useNavigate();

    return (
        <div className="page">
            <div className="contactPage thankYou">
                <main>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="mainIcon" />
                    <h2>Message Sent!</h2>
                    <p>Thanks for your message.</p> 
                    <p>I'll try my best to get back to you within the next two working days.</p>
                    <button
                        onClick={() => navigate("/")}
                    >
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="buttonEl" />                        
                          <span className="buttonEl">Home</span>
                    </button>
                </main>
            </div>
        </div>
    )
}

export default ThankYou;