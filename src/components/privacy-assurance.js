import React from 'react';
import '../styles/privacy-assurance.css';
import Wrapper from '../components/wrapper';

export default function PrivacyAssurance() {
    return (
        <Wrapper wrapperId="privacy-assurance" title="Privacy assurance">
            <div class="sentence">
                <p>We, Pickles developers take the privacy of Pickles users very seriously.</p>
                <p>Stored tab information in your browser will not be sent or disclosed to Pickles developers or any other third party.</p>
            </div>
        </Wrapper>
    );
}
