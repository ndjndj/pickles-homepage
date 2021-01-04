import React from 'react';
import '../styles/page-index.css';
import Wrapper from '../components/wrapper';

export default function PageIndex() {
    return (
        <Wrapper wrapperId="page-index" title="Index">
            <ol>
                <li><a href="#about-pickles">About Pickles</a></li>
                <li><a href="#release-note">Release note</a></li>
                <li><a href="#how-to-install">How to install</a></li>
                <li><a href="#how-to-uninstall">How to uninstall</a></li>
                <li><a href="#how-to-use">How to use</a></li>
                <li><a href="#privacy-assurance">Privacy assurance</a></li>
                <li><a href="#disclaimer">Disclaimer</a></li>
            </ol>
        </Wrapper>
    );
}
