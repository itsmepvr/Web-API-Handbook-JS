import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `// Create a new URL object
const url = new URL('https://www.example.com/path?param1=value1&param2=value2#fragment');

// Access URL components
console.log('Protocol:', url.protocol);
console.log('Host:', url.host);
console.log('Path:', url.pathname);
console.log('Query Parameters:', url.searchParams);
console.log('Hash:', url.hash);

// Modify URL components
url.searchParams.set('param3', 'value3');
url.hash = 'newFragment';

console.log('Modified URL:', url.href);`;

const URLAPI = () => {
    const [originalURL, setOriginalURL] = useState('https://www.example.com/path?param1=value1&param2=value2#fragment');

    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    const handleURLModification = () => {
        // Create a new URL object
        const url = new URL(originalURL);

        // Modify URL components
        url.searchParams.set('param3', 'value3');
        url.hash = 'newFragment';

        // Log modified URL
        console.log('Modified URL:', url.href);
    };

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The URL API</div>
            <div className='text-lg'>
                The URL API provides a way to work with URLs, allowing you to parse, modify, and manipulate URL components.

                <p className="text-md font-bold my-2">Sample URL API Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code}</code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Create a new `URL` object by passing a URL string.</li>
                    <li>Access various components of the URL, such as protocol, host, pathname, search parameters, and hash.</li>
                    <li>Modify URL components using methods like `url.searchParams.set` and direct assignment to `url.hash`.</li>
                    <li>Log the modified URL using `url.href`.</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Parse and extract information from URLs in your web application.</li>
                    <li>Build dynamic URLs by modifying query parameters or fragments based on user interactions.</li>
                    <li>Manipulate and construct URLs in scenarios like routing and navigation.</li>
                </ul>
            </div>

            <div className="text-md font-bold my-4">Modify URL Example:</div>
            <div className="flex items-center my-2">
                <input
                    type="text"
                    className="border border-gray-300 p-2 mr-2"
                    value={originalURL}
                    onChange={(e) => setOriginalURL(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleURLModification}
                >
                    Modify URL
                </button>
            </div>
        </>
    );
};

export default URLAPI;
