import React from 'react';
import '../styles/wrapper.css';

export default function Wrapper(props) {
    const id = props.WrapperId;
    const title = props.title;
    const child = props.child;
    return (
        <div className="wrapper" id={id} >
            <h2><span>{title}</span></h2>

            <div className="content">{child}</div>
        </div>
    );
}
