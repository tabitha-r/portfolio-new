import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './packages.css';

const Packages = () => {

    return (
        <div className="packages">
            <div className="package bronzePackage">
                <FontAwesomeIcon 
                    icon={faHtml5} 
                    className="costsIcon"
                />
                <h4>Simple & Straightforward</h4>
                <p>A simple single or multiple page site, built using classic <abbr title="HyperText Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr>.</p>
                <p>Good for portfolio sites and sites without regular updates.</p>
                <div className="packageIncludes">
                    <p>Includes</p>
                    <ul>
                        <li><abbr title="HyperText Markup Language">HTML</abbr>/<abbr title="Cascading Style Sheets">CSS</abbr>/<abbr title="JavaScript">JS</abbr> Based Site</li>
                        <li>Up to 3 revisions</li>
                        <li>Design Consultation</li>
                        <li>Update Discounts</li>
                        <li>Lifetime Fixes</li>
                        <li><abbr title="Search Engine Optimization">SEO</abbr> & <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Compliance</li>
                    </ul>
                </div>
                <Link to="/services">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="package silverPackage">
                <FontAwesomeIcon 
                    icon={faReact}
                    className="costsIcon"
                />
                <h4>Fast & Fancy</h4>
                <p>An interactive site built using the same technology as Facebook, for faster load times and fancier effects.</p>
                <p>Fun Fact: This site is built this way!</p>
                <div className="packageIncludes">
                    <p>Includes</p>
                    <ul>
                        <li>React Based Site</li>
                        <li>Up to 5 revisions</li>
                        <li>Design Consultation</li>
                        <li>Update Discounts</li>
                        <li>Lifetime Fixes</li>
                        <li><abbr title="Search Engine Optimization">SEO</abbr> & <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Compliance</li>
                    </ul>
                </div>
                <Link to="/services">
                    <button>Learn More</button>
                </Link>
            </div>
            <div className="package goldPackage">
                <FontAwesomeIcon 
                    icon={faWordpress} 
                    className="costsIcon"
                />
                <h4>Pretty & Powerful</h4>
                <p>Combine the speed and power of React with the user-friendliness of the Wordpress <abbr title="Content Management System">CMS</abbr>.</p>
                <p>Great for blogs and sites with regular updates.</p>
                <div className="packageIncludes">
                    <p>Includes</p>
                    <ul>
                        <li>Frontity Based Site</li>
                        <li>Up to 8 revisions</li>
                        <li>Design Consultation</li>
                        <li>Update Discounts</li>
                        <li>Lifetime Fixes</li>
                        <li><abbr title="Search Engine Optimization">SEO</abbr> & <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> Compliance</li>
                    </ul>
                </div>
                <p></p>
                <Link to="/services">
                    <button>Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default Packages;