import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRotateRight, faHouseChimney, faEllipsis } from '@fortawesome/pro-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from '../../features/dropdown/dropdown';

export const BrowserHeader = () => {
    const location = useLocation();
    const page = location.pathname.substring(1).replace(/^\w/, (c) => c.toUpperCase());
    const path = location.pathname;
    let navigate = useNavigate();
    
    const [open, setOpen] = useState(false);

    return (
        <header>
            <button 
                className="browserControlButton"
                onClick={() => navigate(-1)}
            >
                <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
            </button>
            <button 
                className="browserControlButton"
                onClick={() => navigate(1)}
            >
                <FontAwesomeIcon icon={faAngleRight} fixedWidth />
            </button>
            <button 
                className="browserControlButton"
                onClick={() => navigate(path, { replace: true })}
            >
                <FontAwesomeIcon icon={faArrowRotateRight} fixedWidth />
            </button>
            <button
                className="browserControlButton"
                onClick={() => navigate("/")}
            >
                <FontAwesomeIcon icon={faHouseChimney} fixedWidth />
            </button>
            <div className="fauxUrlBar">
                <h1>Tabitha Riley Digital</h1>
                {page ? <p>|</p> : <span></span>}
                <h2>{page}</h2>
            </div>
            <button 
                className="browserControlButton"
                onClick={() => setOpen(!open)}
            >
                <FontAwesomeIcon icon={faEllipsis} fixedWidth />
            </button>
            <br />
            {open && <Dropdown />}
        </header>
    )
}