import React from 'react';
import './with-love.css';


const MadeWithLove = ({ githubProfile }) => (
    <small>
        Made with&nbsp;
        <span
            role="img"
            aria-label="love"
            title="love"
        >&#10084;</span> by&nbsp;
        <a
            href={`${githubProfile}`}
            target="_blank"
            rel="noopener noreferrer"
        >@SnovRuslan</a>
    </small>
);

export default MadeWithLove;
