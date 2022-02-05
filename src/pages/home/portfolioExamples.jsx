import React from 'react';
import vaHomepage from '../../images/portfolio-examples/va-homepage-desktop.png';
import clubSite from '../../images/portfolio-examples/club-site-desktop.png';
import lurkit from '../../images/portfolio-examples/lurkit-desktop.png';
import tarot from '../../images/portfolio-examples/tarot-desktop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/pro-solid-svg-icons';
import { Link } from 'react-router-dom';
import './portfolioExamples.css';

const PortfolioExamples = () => {

    return (
        <div className="examplesScroller">
            <div className="exampleCard">
                <img src={vaHomepage} alt="Portfolio Project Site Preview" />
                <div>
                    <h4>Company Homepage</h4>
                    <Link to="/portfolio">
                            See More
                            <FontAwesomeIcon 
                                icon={faAnglesRight}
                                className="icon"
                            />
                    </Link>
                </div>
            </div>
            <div className="exampleCard">
                <img src={clubSite} alt="Portfolio Project Site Preview" />
                <div>
                    <h4>Responsive Club Site</h4>
                    <Link to="/portfolio">
                            See More
                            <FontAwesomeIcon 
                                icon={faAnglesRight}
                                className="icon"
                            />
                    </Link>
                </div>
            </div>
            <div className="exampleCard">
                <img src={lurkit} alt="Portfolio Project Site Preview" />
                <div>
                    <h4>Reddit Client</h4>
                    <Link to="/portfolio">
                            See More
                            <FontAwesomeIcon 
                                icon={faAnglesRight}
                                className="icon"
                            />
                    </Link>
                </div>
            </div>
            <div className="exampleCard">
                <img src={tarot} alt="Portfolio Project Site Preview" />
                <div>
                    <h4>Random Generator</h4>
                    <Link to="/portfolio">
                            See More
                            <FontAwesomeIcon 
                                icon={faAnglesRight}
                                className="icon"
                            />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioExamples;