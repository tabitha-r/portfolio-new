/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileScreen } from '@fortawesome/pro-solid-svg-icons';
import { css } from '@emotion/react';
import { selectPortfolio } from '../../store/portfolioSlice';
import vaHomepageDesktop from '../../images/portfolio-examples/va-homepage-desktop.png';
import vaHomepageMobile from '../../images/portfolio-examples/va-homepage-mobile.png';
import clubSiteDesktop from '../../images/portfolio-examples/club-site-desktop.png';
import clubSiteMobile from '../../images/portfolio-examples/club-site-mobile.png';
import lurkitDesktop from '../../images/portfolio-examples/lurkit-desktop.png';
import lurkitMobile from '../../images/portfolio-examples/lurkit-mobile.png';
import tarotDesktop from '../../images/portfolio-examples/tarot-desktop.png';
import tarotMobile from '../../images/portfolio-examples/tarot-mobile.png';

const PreviewImage = () => {
    const portfolio = useSelector(selectPortfolio);

    const imageSource = (image) => {
        const importedImg = [vaHomepageDesktop, clubSiteDesktop, lurkitDesktop, tarotDesktop, vaHomepageMobile, clubSiteMobile, lurkitMobile, tarotMobile];
        let response;
        importedImg.forEach(img => {
            if (img.includes(image)) {
                response = img;
            }
        });
        
        return response;
    };

    const [orientation, setOrientation] = useState('landscape');


    return (
        <>
            {portfolio.projects.map(({name, desktopPreview, mobilePreview, id}) => (
                <div key={id}>
                    <div
                        css={css`
                            border: 10px solid #999;
                            width: ${orientation === 'landscape' ? '500px' : 'auto'};
                            height: ${orientation === 'landscape' ? 'auto' : '500px'};
                            aspect-ratio: ${orientation === 'landscape' ? '16 / 9' : '8.5 / 16'};
                            overflow: hidden;
                            border-radius: 25px;
                            padding: 0px;
                            object-fit: cover;
                        `}
                    >
                        <img
                            src={orientation === 'landscape' ? imageSource(desktopPreview) : imageSource(mobilePreview)}
                            css={css`
                                width: ${orientation === 'landscape' ? '100%' : 'auto'};
                                height: ${orientation === 'landscape' ? 'auto' : '100%'};
                            `}
                            alt="Portfolio Project Preview"
                        />
                    </div>
                    <div>
                        <button onClick={() => setOrientation('landscape')}>
                            <FontAwesomeIcon icon={faDesktop} />
                        </button>
                        <button onClick={() => setOrientation('portrait')}>
                            <FontAwesomeIcon icon={faMobileScreen} />
                        </button>
                    </div>
                </div>
            ))}
        </>
        
    )
}

export default PreviewImage;