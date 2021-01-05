import React from 'react';
import '../styles/bullet-wrapper.css';

export default function BulletWrapper(props) {
    const Bullets = props.bullets;
    const title = props.title;
    const direction = props.direction;
    const typeOfNum = props.typeOfNum;

    function olul(isNum, callback){
        if (isNum) {
            <ol>{callback()}</ol>
        }
    }

    return (
        <div className={direction + " description"}>
            <h3><span>{title}</span></h3>

            {
                if (typeOfNum) <ol>;


            }
        </div>
    );
}
