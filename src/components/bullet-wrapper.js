import React from 'react';
import '../styles/bullet-wrapper.css';

export default function BulletWrapper(props) {
    //const bullets = props.bullets;
    const title = props.title;
    const direction = props.direction;
    const isNum = props.typeOfNum;
    let bullets = [];

    for (var i=0; i<props.bullets.length; i++) {
        bullets.push(<li>{props.bullets[i]}</li>);
    }
    console.log(bullets);

    function olul(isNum, bullets){
        return isNum ? <ol>{bullets}</ol> : <ul>{bullets}</ul>
    }

    function writeBullets(bullets) {
        console.log(bullets)
        bullets.map(
            (bullet) => {return <li>{bullet}</li>;}
        );
    }

    return (
        <div className={direction + " description"}>
            <h3><span>{title}</span></h3>

            {olul(isNum, bullets)}
        </div>
    );
}
