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
import degree from '../../images/certificates/degree.jpg';
import jstesting from '../../images/certificates/js-testing-certificate.jpg';
import jsdebug from '../../images/certificates/js-debug-certificate.jpg';
import regex from '../../images/certificates/regex-certificate.jpg';
import commandline from '../../images/certificates/command-line-certificate.jpg';
import git from '../../images/certificates/git-github-certificate.jpg';

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
                    <div className="tooltip">
                        <img 
                            src={digitalmarketing} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={reactcert} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={html} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={css} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={js} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={cssinjs} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={sass} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={colourdesign} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={navdesign} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={responsivedesign} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={redux} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={reactrouter} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={php} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
                    <div className="tooltip">
                        <img 
                            src={interactivejs} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

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
            case 'commandline':
                return (
                    <div className="cert">
                    <div className="tooltip">
                        <img 
                            src={commandline} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={commandline} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                             
            case 'degree':
                return (
                    <div className="cert">
                    <div className="tooltip">
                        <img 
                            src={degree} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={degree} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                             
            case 'git':
                return (
                    <div className="cert">
                    <div className="tooltip">
                        <img 
                            src={git} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={git} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                             
            case 'jsdebug':
                return (
                    <div className="cert">
                    <div className="tooltip">
                        <img 
                            src={jsdebug} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={jsdebug} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                             
            case 'jstesting':
                return (
                    <div className="cert">
                        <div className="tooltip">
                        <img 
                            src={jstesting} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={jstesting} 
                                    alt={alt} 
                                    className="certDisplay"
                                    onClick={() => setEnlarge(false)}
                                />
                            </div>
                        }
                    </div>
                );
                break;                            
            case 'regex':
                return (
                    <div className="cert">
                        <div className="tooltip">
                        <img 
                            src={regex} 
                            alt={alt} 
                            className="certPreview"
                            onClick={() => setEnlarge(true)}
                        />                       
                            <span className="tooltiptext">{name}</span>
                        </div>

                        {enlarge &&
                            <div 
                                className="bigCert"
                                onClick={() => setEnlarge(false)}
                            >
                                <img 
                                    src={regex} 
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