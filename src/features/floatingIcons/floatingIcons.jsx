import React from 'react';
import './floatingIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopMobile, faWrenchSimple, faRectangleTerminal, faBracketsCurly } from '@fortawesome/pro-solid-svg-icons';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

const FloatingIcons = () => {
    
    return (
        <div className="floatingIcons">
                <FontAwesomeIcon 
                    icon={faRectangleTerminal}
                    className='floatingIconA floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faJs}
                    className='floatingIconB floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faLaptopMobile}
                    className='floatingIconC floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faCss3}
                    className='floatingIconD floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faCode}
                    className='floatingIconE floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faReact}
                    className='floatingIconF floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faBracketsCurly}
                    className='floatingIconG floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faHtml5}
                    className='floatingIconH floatingIcon'
                />
                <FontAwesomeIcon 
                    icon={faWrenchSimple}
                    className='floatingIconI floatingIcon'
                />
            </div>
    )
}

export default FloatingIcons;