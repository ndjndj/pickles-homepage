import React from 'react';
import '../styles/release-note.css';
import LP_2 from '../img/PicklesLP_2.png';

export default function ReleaseNote() {

    return (
        <React.Fragment>
            <div class="img">
                <img src={LP_1} alt="about-pickles" />
            </div>
            <div class="description">
                <p>Excessively open tabs consume a lot of memory.</p>
                <p>Use 'Pickles' to pickle that excessively opened tabs.</p>
                <p>'Pickles' is a simple Google Chrome extension.</p>
                <p>You can install it from the link below(it will be redirected to Google web store).</p>
            </div>
        </React.Fragment>
    );
}
