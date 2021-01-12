import React from 'react';
import '../styles/flex-wrapper.css';

export default function FlexWrapper(props) {
    const leftComponent = props.leftComponent;
    const rightComponent = props.rightComponent;
    return (
        <div className="flex-wrapper">
            <React.Fragment className='left'>
                {leftComponent}
            </React.Fragment>

            <React.Fragment className='right'>
                {rightComponent}
            </React.Fragment>
        </div>
    );
}
