import React from 'react';
import showdown from 'showdown';
import fs from 'fs';
import path from 'path';

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
    const converter = new showdown.Converter();
    //  add styling
    const markdownStylePath = path.join(process.cwd(), 'src', 'posts', 'style.md');
    const styleContent = fs.readFileSync(markdownStylePath, 'utf-8');

    //append styling to post markdown
    const combinedContent = markdownContent + '\n' + styleContent;

    //convert ohtml using showdown
    const html = converter.makeHtml(combinedContent);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
