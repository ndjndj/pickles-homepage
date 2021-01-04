import React from 'react';
import '../styles/disclaimer.css';
import Wrapper from '../components/wrapper';

export default function Disclaimer() {
    return (
        <Wrapper wrapperId="disclaimer" title="Disclaimer">
            <div class="sentence">
                <p>Please note that we cannot be held responsible for any damage caused by the use of this extension.</p>
                <p>Use of Pickles must be done at your own risk.</p>
            </div>
        </Wrapper>
    );
}
