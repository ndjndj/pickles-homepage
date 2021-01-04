import React from 'react';
import '../styles/release-note.css';
import Wrapper from '../components/wrapper';

export default function ReleaseNote() {
    return (
        <Wrapper wrapperId="release-note" title="Release Note">
            <div class="scroll-box">
                <dl>
                    <dt>December 28th, 2020</dt>
                    <dd>Created this page.</dd>
                    <dt>December 21th, 2020</dt>
                    <dd>Released Pickles ver 1.0</dd>
                </dl>
            </div>
        </Wrapper>
    );
}
