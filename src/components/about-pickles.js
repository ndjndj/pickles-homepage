import React from 'react';
import '../styles/about-pickles.css';
import Button from '../components/button';

export default function AboutPickles(props) {
    const installLink = "https://chrome.google.com/webstore/detail/pickles/cbbhnfkdiimgbfbmaaamdcdmjmgbgpoa";
    return (
        <React.Fragment>
            <div class="img">
                    <img src="PicklesLP_1.png" alt="" />
            </div>

            <div class="description">
                    <p>Excessively open tabs consume a lot of memory.</p>
                    <p>Use 'Pickles' to pickle that excessively opened tabs.</p>

                    <p>'Pickles' is a simple Google Chrome extension.</p>

                    <p>You can install it from the link below(it will be redirected to Google web store).</p>
            </div>

            <Button link={installLink} sentence={"Install now"} />
        </React.Fragment>
    );
}
