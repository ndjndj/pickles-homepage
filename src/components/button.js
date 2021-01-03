import React from 'react';
import '../styles/button.css';
import { Link } from 'gatsby';

export default function Button(props) {
    const link = props.link;
    const sentence = props.sentence;
    return (
        <Link to={link} className="btn">
            {sentence}
        </Link>
    );
}
