import React from 'react';
import { useSelector } from 'react-redux';
import vaHomepage from '../../images/portfolio-examples/va-homepage-desktop.png';
import clubSite from '../../images/portfolio-examples/club-site-desktop.png';
import lurkit from '../../images/portfolio-examples/lurkit-desktop.png';
import tarot from '../../images/portfolio-examples/tarot-desktop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/pro-solid-svg-icons';
import { Link } from 'react-router-dom';
import './portfolioExamples.css';
import { selectPortfolio } from '../../store/portfolioSlice';

const PortfolioExamples = () => {
    const portfolio = useSelector(selectPortfolio);

    const preview = (image) =>  {
        const importedImg = [vaHomepage, clubSite, lurkit, tarot];
        let response;
        importedImg.forEach(img => {
            if (img.includes(image)) {
                response = img;
            }
        });
        return response;
    };

    return (
        <div className="examplesScroller">
            {portfolio.projects.map(({name, desktopPreview}) => (
            <div className="exampleCard">
                <img src={preview(desktopPreview)} alt="Portfolio Project Site Preview" />
                <div>
                    <h4>{name}</h4>
                    <Link to="/portfolio">
                            See More
                            <FontAwesomeIcon 
                                icon={faAnglesRight}
                                className="icon"
                            />
                    </Link>
                </div>
            </div>
            ))}
        </div>
    )
}

export default PortfolioExamples;