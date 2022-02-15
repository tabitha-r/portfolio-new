import React, { useState } from 'react';
import digitalmarketing from '../../images/certificates/digital-marketing-certificate.jpg';
import reactcert from '../../images/certificates/react-certificate.jpg';
import html from '../../images/certificates/html-certificate.jpg';
import css from '../../images/certificates/css-certificate.jpg';
import js from '../../images/certificates/js-certificate.jpg';
import cssinjs from '../../images/certificates/css-in-js-certificate.jpg';
import interactivejs from '../../images/certificates/interactive-js-certificate.jpg';
import sass from '../../images/certificates/sass-certificate.jpg';
import redux from '../../images/certificates/redux-certificate.jpg';
import reactrouter from '../../images/certificates/react-router-certificate.jpg';
import colourdesign from '../../images/certificates/colour-design-certificate.jpg';
import responsivedesign from '../../images/certificates/responsive-design-certificate.jpg';
import navdesign from '../../images/certificates/nav-design-certificate.jpg';
import php from '../../images/certificates/php-certificate.jpg';

const Certificate = (props) => {
    const [enlarge, setEnlarge] = useState(false);

    const imageName = props.src;
    const name = props.name;
    const alt = `${name} Certificate`;

    const image = () => {
        switch (imageName) {
            case 'digitalmarketing':
                return (
                    <div className="cert">
                        <img 
                            src={digitalmarketing} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={digitalmarketing} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;
            case 'reactcert':
                return (
                    <div className="cert">
                        <img 
                            src={reactcert} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={reactcert} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;
            case 'html':
                return (
                    <div className="cert">
                        <img 
                            src={html} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={html} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;
            case 'css':
                return (
                    <div className="cert">
                        <img 
                            src={css} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={css} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;              
            case 'js':
                return (
                    <div className="cert">
                        <img 
                            src={js} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={js} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;
            case 'cssinjs':
                return (
                    <div className="cert">
                        <img 
                            src={cssinjs} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={cssinjs} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                
            case 'sass':
                return (
                    <div className="cert">
                        <img 
                            src={sass} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={sass} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;            
            case 'colourdesign':
                return (
                    <div className="cert">
                        <img 
                            src={colourdesign} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={colourdesign} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                
            case 'navdesign':
                return (
                    <div className="cert">
                        <img 
                            src={navdesign} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={navdesign} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;               
            case 'responsivedesign':
                return (
                    <div className="cert">
                        <img 
                            src={responsivedesign} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={responsivedesign} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                
            case 'redux':
                return (
                    <div className="cert">
                        <img 
                            src={redux} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={redux} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;            
            case 'reactrouter':
                return (
                    <div className="cert">
                        <img 
                            src={reactrouter} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={reactrouter} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                
            case 'php':
                return (
                    <div className="cert">
                        <img 
                            src={php} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={php} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;               
            case 'interactivejs':
                return (
                    <div className="cert">
                        <img 
                            src={interactivejs} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={interactivejs} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;
        }
    };

    return (
        <>{image()}</>
    )
}

export default Certificate;