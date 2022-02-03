import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSkills, toggleMoreInfo } from '../../store/skillsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faNodeJs, faReact, faPhp, faGitAlt, faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/pro-solid-svg-icons';
import './skills.css';
import { ShowMoreInfo } from './moreInfo';

export const DisplaySkills = () => {
    const skills = useSelector(selectSkills);
    const dispatch = useDispatch();

    const skillIcon = (icon, moreInfo) => {
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
            default:
                return <FontAwesomeIcon className="skillIcon faCode" icon={faCode} />
        }
    };

    const handleClick = (name) => {
        dispatch(toggleMoreInfo(name));
    };

    return (
        <div className="skills">
            {skills.skills.map(({ name, fullName, description, icon, tags, moreInfo }) => (
                <div key={icon}>
                    <button
                        className={moreInfo ? "activeInfo skillCard" : "skillCard"}
                        onClick={() => handleClick(name)}
                    >
                        {skillIcon(icon)}
                        {moreInfo ? <ShowMoreInfo name={name} fullName={fullName} description={description} /> : <span></span>}
                    </button>
                </div>
            ))}
        </div>
    )
}