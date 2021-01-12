import React from 'react';
import '../styles/img-wrapper.css';

export default function ImgWrapper(props) {
    const imgSrc = props.imgSrc;
    const imgAlt = props.imgAlt;
    return (
        <div className="img">
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}
