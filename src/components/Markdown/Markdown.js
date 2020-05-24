import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import './MarkDown.css';
import CodeBlock from './CodeBlock';

const Markdown = ({ source }) => (
    <ReactMarkdown 
        source={source}
        escapeHtml={false}
        className="markdown"
        renderers={{ code: CodeBlock }}
    />
);

export default Markdown;