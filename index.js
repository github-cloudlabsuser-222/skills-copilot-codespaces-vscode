import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};
const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

return (
    <div>
        <textarea value={markdown} onChange={handleMarkdownChange} />
        <ReactMarkdown>{capitalizedSentence}</ReactMarkdown>
    </div>
);
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);
export default MarkdownEditor;
