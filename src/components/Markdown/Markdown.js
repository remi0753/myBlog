import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import CodeBlock from './CodeBlock';
import Strong from './Strong';
import Link from './Link';
import Blockquote from './Blockquote';
import Heading from './Heading';

const Markdown = ({ source }) => (
    <ReactMarkdown 
        source={source}
        escapeHtml={false}
        className="markdown"
        renderers={{ 
            code: CodeBlock, 
            strong: Strong,
            link: Link,
            linkReference: Link,
            blockquote: Blockquote,
            heading: Heading,
        }}
    />
);

export default Markdown;