import React from 'react';
import '../styles/page-index.css';
import Wrapper from '../components/wrapper';
import { Link } from 'gatsby';

export default function PageIndex() {
    const links = {
        '#about-pickles': 'About Pickles',
        '#release-note': 'Release note',
        '#how-to-install': 'How to install',
        '#how-to-uninstall': 'How to uninstall',
        '#how-to-use': 'How to use',
        '#privacy-assurance': 'Privacy assurance',
        '#disclaimer': 'Disclaimer'
    };
    
    return (
        <Wrapper wrapperId="page-index" title="Index">
            <ol>
                {
                    links.map((link) => {})
                }
            </ol>
        </Wrapper>
    );
}
