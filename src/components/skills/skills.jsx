/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSkills } from '../../store/skillsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/pro-solid-svg-icons';
import { faCircle as fadCircle } from '@fortawesome/pro-duotone-svg-icons';
import './skills.css';
import { css } from '@emotion/react'

export const DisplaySkills = () => {
    const skills = useSelector(selectSkills);

    const [hover, setHover] = useState(false);

    const skillScale = (level) => {
        const levelArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const response = [];
        levelArray.forEach(levelNo => {
            if (levelNo <= level) {
                response.push(<FontAwesomeIcon icon={faCircle} className="levelIndicator" key={levelNo} />);
            } else {
                response.push(<FontAwesomeIcon icon={fadCircle} className="levelIndicator" key={levelNo} />);
            }
        });
        return response;
    }

    return (
        <div className="skills">
            {skills.skills.map(({ name, id, fullName, icon, tags, level, link }) => (
                <div 
                    key={id}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <a 
                        className="skillCard"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img 
                            className="skillIcon"
                            src={icon}
                            alt={name}
                            css={css`
                                filter: ${hover ? 'none' : 'var(--iconbrightness)'};
                                transition: .5s ease;
                            `}
                        />
                        <div>
                            <h5>{name}</h5>
                            <p className="skillScale">
                                {skillScale(level)}
                            </p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}