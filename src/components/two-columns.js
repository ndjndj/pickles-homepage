import React from 'react';
import '../styles/two-columns.css';

export default function TwoColumns(props) {
    const leftComponentType = props.leftComponentType;
    const rightComponentType = props.rightComponentType;
    return (
        <div className="two-columns">
            <div className={leftComponentType + " left "}>


            </div>
        </div>
    );
}
