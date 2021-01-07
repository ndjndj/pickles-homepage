import React from 'react';
import '../styles/bullet-wrapper.css';

export default function BulletWrapper(props) {
    const bullets = props.bullets;
    const title = props.title;
    const direction = props.direction;
    const typeOfNum = props.typeOfNum;

    function olul(isNum, bullets){
        return isNum ? <ol>{writeBullets(bullets)}</ol> : <ul>{writeBullets(bullets)}</ul>
    }

    function writeBullets(bullets) {
        bullets.map(
            bullet => <li>{bullet[i]}</li>
        );
    }

    return (
        <div className={direction + " description"}>
            <h3><span>{title}</span></h3>

            {olul(typeOfNum, bullets)}
        </div>
    );
}
