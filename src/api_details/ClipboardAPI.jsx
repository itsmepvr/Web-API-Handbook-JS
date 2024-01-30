import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `// Copy text to the clipboard
navigator.clipboard.writeText('Hello, Clipboard!')
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch(error => {
    console.error('Clipboard write error:', error);
  });

// Read text from the clipboard
navigator.clipboard.readText()
  .then(text => {
    console.log('Text read from clipboard:', text);
  })
  .catch(error => {
    console.error('Clipboard read error:', error);
  });`;

const ClipboardAPI = () => {
  useEffect(() => {
    // Trigger highlighting on component mount
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="text-2xl font-bold text-center py-2">The Clipboard API</div>
      <div className='text-lg'>
        The Clipboard API provides a simple interface for interacting with the clipboard. It allows you to programmatically copy and paste text.

        <p className="text-md font-bold my-2">Sample Clipboard API Code:</p>
        <pre className="my-4 border-2 rounded">
          <code className="language-javascript">{code}</code>
        </pre>

        <p className="text-md font-bold my-2">Explanation:</p>
        <ul className="list-disc pl-10 sm:pl-5">
          <li>Use `navigator.clipboard.writeText` to copy text to the clipboard.</li>
          <li>Use `navigator.clipboard.readText` to read text from the clipboard.</li>
          <li>Both methods return a promise, allowing you to handle success and error cases.</li>
        </ul>

        <p className="text-md font-bold my-2">Use Cases:</p>
        <ul className="list-disc pl-10 sm:pl-5 my-2">
          <li>Allow users to copy content from your web application with a button click.</li>
          <li>Implement a "Copy to Clipboard" feature for shareable links or codes.</li>
          <li>Enhance user experience by simplifying text copying and pasting actions.</li>
        </ul>
      </div>
    </>
  );
};

export default ClipboardAPI;
