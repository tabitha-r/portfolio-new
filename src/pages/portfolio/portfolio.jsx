import React from 'react';
import PreviewImage from '../../features/portfolioPreview/previewImage';
import './portfolio.css';

const Portfolio = () => {

    return (
        <div className="page">
            <div className="portfolioPage">
                    <h2>My Portfolio Projects</h2>
                    <PreviewImage />
            </div>
        </div>
    )
}

export default Portfolio;