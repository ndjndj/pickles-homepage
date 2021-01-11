import React from 'react';
import '../styles/flex-wrapper.css';

export default function FlexWrapper(props) {
    const leftComponentType = props.leftComponentType;
    const rightComponentType = props.rightComponentType;
    return (
        <div className="flex-wrapper">
            <div className={leftComponentType + " left "}>


            </div>
        </div>
    );
}
