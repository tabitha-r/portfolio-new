import React from 'react';
import './contactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleEnvelope, faPenCircle, faCircleUser, faPaperPlane } from '@fortawesome/pro-solid-svg-icons';

const ContactForm = () => {

    return (
        <div className="contactForm">
            <h3>Contact Form</h3>  
            <p>You can send me a message using this handy-dandy form.</p>         
            <form action="https://formsubmit.co/e128543ab65b34847b8c3c0b45116cf6" method="POST">
                <span className="formInput">
                  <label htmlFor="name">
                    <abbr title="Name"><FontAwesomeIcon
                      icon={faCircleUser}
                      className="formIcon" /></abbr>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required />
                </span>
                <br />
                <span className="formInput">
                  <label htmlFor="email">
                    <abbr title="E-Mail Address"><FontAwesomeIcon
                      icon={faCircleEnvelope}
                      className="formIcon" /></abbr>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    required />
                </span>
                <br />
                <span className="formInput">
                  <label htmlFor="message">
                    <abbr title="Message"><FontAwesomeIcon
                      icon={faPenCircle}
                      className="formIcon" /></abbr>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required />
                </span>
                <br />
                <button 
                    type="submit"
                >
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="buttonElement" />
                  <span className="buttonElement">Send</span>
                </button>
                <input type="hidden" name="_next" value="http://localhost:3000/contact/thanks"></input>
                <input type="hidden" name="_subject" value="TRD: Contact Form Submission"></input>
            </form>
        </div>
    )
};

export default ContactForm;