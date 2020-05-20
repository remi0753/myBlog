import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import './MarkDown.css';

const Markdown = ({ source }) => (
    <ReactMarkdown 
        source={source}
        escapeHtml={false}
        className="markdown"
    />
);

export default Markdown;