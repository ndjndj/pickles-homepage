import React from 'react';
import '../styles/how-to-use.css';
import Wrapper from '../components/wrapper';
import BulletWrapper from '../components/bullet-wrapper';
import ImgWrapper from '../components/img-wrapper';
import FlexWrapper from '../components/flex-wrapper';
import LP_2 from '../img/PicklesLP_2.png';


export default function HowToUse() {
    return (
        <Wrapper wrapperId="how-to-use" title="How to use">
            <div className="flex-wrapper">



                <div className="left img">
                    <img src={LP_2} alt="" />
                </div>

                <div className="right description">
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
            <div className="flex-wrapper">
                    <div className="left description">
                        <div>
                            <h3><span>How to check Pickle.</span></h3>
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

            <div className="flex-wrapper">
                <div className="left img">
                    <img src={LP_2} alt="" />
                </div>

                <div className="right description">
                    <div>
                        <h3><span>What else Pickles can do?</span></h3>
                            <ol>
                                <li>Click to DL CSV button to download Pickle with CSV format.</li>
                                <li>Click to DL md button to download Pickle with markdown format.</li>
                                <li>Click to output md button to copy Pickle with markdown format.</li>
                            </ol>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
