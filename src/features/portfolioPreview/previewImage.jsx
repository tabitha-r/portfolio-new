/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileScreen } from '@fortawesome/pro-solid-svg-icons';
import { css } from '@emotion/react';

const PreviewImage = (props) => {
    const imageSource = props.url;
    
    const [orientation, setOrientation] = useState('landscape');

    return (
        <div>
            <div
                css={css`
                    border: 10px solid #999;
                    width: ${orientation === 'landscape' ? '100px' : 'auto'};
                    height: ${orientation === 'landscape' ? 'auto' : '100px'}
                    aspect-ratio: ${orientation === 'landscape' ? '16 / 9' : '9 / 16'};
                    overflow: hidden;
                    border-radius: 25px;
                    background-image: url(${imageSource});
                `}
            >
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
    )
}

export default PreviewImage;