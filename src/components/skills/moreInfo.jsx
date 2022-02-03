import React from 'react';

export const ShowMoreInfo = (props) => {

    return (
        <div className="moreInfo">
            <h3 className="languageName">{props.name}</h3>
            {props.fullName ? <h4 className="languageFullName">{props.fullName}</h4> : <span></span>}
            <p className="languageDesc">{props.description}</p>
        </div>
    )
}