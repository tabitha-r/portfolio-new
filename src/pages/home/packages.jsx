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
                <h3>Simple & Straightforward</h3>
                <p>A simple single or multiple page site, built using classic <abbr title="HyperText Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr>.</p>
                <p>Good for portfolio sites and sites without regular updates.</p>
                <div className="packageIncludes">
                    <p>Includes</p>
                    <ul>
                        <li><abbr title="HyperText Markup Language">HTML</abbr>/<abbr title="Cascading Style Sheets">CSS</abbr> Based Site</li>
                        <li>Up to 3 revisions</li>
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
                <h3>Fast & Fancy</h3>
                <p>An interactive site built using the same technology as Facebook, for faster load times and fancier effects.</p>
                <p>This site is built this way!</p>
                <div className="packageIncludes">
                    <p>Includes</p>
                    <ul>
                        <li>React Based Site</li>
                        <li>Up to 5 revisions</li>
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
                <h3>Pretty & Powerful</h3>
                <p>Combine the speed and power of React with the user-friendliness of Wordpress.</p>
                <p>Great for blogs and sites with regular updates.</p>
                <div className="packageIncludes">
                    <p>Includes</p>
                    <ul>
                        <li>Frontity Based Site</li>
                        <li>Up to 8 revisions</li>
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