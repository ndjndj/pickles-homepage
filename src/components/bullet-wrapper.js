import React from 'react';
import '../styles/bullet-wrapper.css';

export default function BulletWrapper(props) {
    const bullets = props.bullets;
    const title = props.title;
    const direction = props.direction;
    const typeOfNum = props.typeOfNum;

    function olul(isNum, callback){
        return isNum ? <ol>{callback()}</ol> : <ul>{callback()}</ul>
    }

    function writeBullets(bullets) {
        bullets.map(
            
        );
    }

    return (
        <div className={direction + " description"}>
            <h3><span>{title}</span></h3>

            {



            }
        </div>
    );
}
