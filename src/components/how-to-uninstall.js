import React from 'react';
import '../styles/how-to-uninstall.css';
import Wrapper from '../components/wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToUnInstall() {
    return (
        <Wrapper wrapperId="how-to-uninstall" title="How to uninstall">
            <div className="flex-wrapper">
                <div className="left description">
                    <div>
                        <h3><span>How to Pickle.</span></h3>
                            <ol>
                                <li>Click to Pickles icon.</li>
                                <li>Click to tabs button.</li>
                                <li>Click to Pickle to open tabs.</li>
                                <li>Click to INFO button to check the Pickle.</li>
                                <li>Click to DEL button to delete the Pickle.</li>
                            </ol>
                    </div>
                </div>

                <div className="right img">
                    <img src={LP_2} alt="" />
                </div>
            </div>
        </Wrapper>
    );
}
