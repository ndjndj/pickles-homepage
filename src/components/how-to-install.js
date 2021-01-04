import React from 'react';
import '../styles/how-to-install.css';
import Wrapper from '../components/wrapper';
import LP_2 from '../img/PicklesLP_2.png';

export default function HowToInstall() {
    return (
        <Wrapper wrapperId="how-to-install" title="How to install">
            <div class="flex-wrapper">
                <div class="left img">
                    <img src={LP_2} alt="" />
                </div>

                <div class="right description">
                    <div>
                        <h3><span>How to Pickle.</span></h3>
                            <ol>
                                <li>Click to Pickles icon.</li>
                                <li>Click to SAVE button.</li>
                                <li>Please enter Pickles name.</li>
                                <li>Click to SAVE button.</li>
                                <li>Pickle will be stored in your browser.</li>
                            </ol>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
