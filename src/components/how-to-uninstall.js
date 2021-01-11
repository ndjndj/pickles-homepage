import React from 'react';
import '../styles/how-to-uninstall.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToUnInstall() {
    const bullets = [
        'Click to Pickles icon.',
        'Click to tabs button.',
        'Click to Pickle to open tabs.',
        'Click to INFO button to check the Pickle.',
        'Click to DEL button to delete the Pickle.'
    ];
    const title = 'How to Pickle.';
    const direction = 'left';
    const isNum = true;
    
    return (
        <Wrapper wrapperId="how-to-uninstall" title="How to uninstall">
            <div className="flex-wrapper">
                <BulletWrapper
                    bullets = {bullets}
                    title = {title}
                    direction = {direction}
                    isNum = {isNum}
                />

                <div className="right img">
                    <img src={LP_2} alt="" />
                </div>
            </div>
        </Wrapper>
    );
}
