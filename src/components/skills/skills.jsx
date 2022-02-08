import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSkills } from '../../store/skillsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faNodeJs, faReact, faPhp, faGitAlt, faGithub, faWordpress, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCode, faChevronsRight, faCircle } from '@fortawesome/pro-solid-svg-icons';
import { faCircle as fadCircle } from '@fortawesome/pro-duotone-svg-icons';
import './skills.css';

export const DisplaySkills = () => {
    const skills = useSelector(selectSkills);

    const [open, setOpen] = useState(false);

    const skillIcon = (icon) => {
        switch (icon) {
            case 'faHtml5':
                return <FontAwesomeIcon className="skillIcon faHtml5" icon={faHtml5} />
            case 'faCss3':
                return <FontAwesomeIcon className="skillIcon faCss3" icon={faCss3} />
            case 'faJsSquare':
                return <FontAwesomeIcon className="skillIcon faJsSquare" icon={faJsSquare} />
            case 'faNodeJs':
                return <FontAwesomeIcon className="skillIcon faNodeJs" icon={faNodeJs} />
            case 'faReact':
                return <FontAwesomeIcon className="skillIcon faReact" icon={faReact} />
            case 'faPhp':
                return <FontAwesomeIcon className="skillIcon faPhp" icon={faPhp} />
            case 'faGitAlt':
                return <FontAwesomeIcon className="skillIcon faGitAlt" icon={faGitAlt} />
            case 'faGithub':
                return <FontAwesomeIcon className="skillIcon faGithub" icon={faGithub} />
            case 'faWordpress':
                return <FontAwesomeIcon className="skillIcon faWordpress" icon={faWordpress} />
            case 'faSass':
                return <FontAwesomeIcon className="skillIcon faSass" icon={faSass} />
            case 'faChevronsRight':
                return <FontAwesomeIcon className="skillIcon faChevronsRight" icon={faChevronsRight} />
            default:
                return <FontAwesomeIcon className="skillIcon faCode" icon={faCode} />
        }
    };

    const skillScale = (level) => {
        const levelArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const response = [];
        levelArray.forEach(levelNo => {
            if (levelNo <= level) {
                response.push(<FontAwesomeIcon icon={faCircle} className="levelIndicator" />);
            } else {
                response.push(<FontAwesomeIcon icon={fadCircle} className="levelIndicator" />);
            }
        });
        return response;
    }

    return (
        <div className="skills">
            {skills.skills.map(({ name, fullName, description, icon, tags, level }) => (
                <div 
                    key={icon}
                    onClick={() => setOpen(!open)}
                >
                    <div 
                        className="skillCard"
                    >
                        <div className="skillIcon {icon}">
                            {skillIcon(icon)}
                        </div>
                        <div className="skillScale">
                            {skillScale(level)}
                        </div>
                    </div>
                    {open &&
                        <div>
                            <p>{name}</p>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}