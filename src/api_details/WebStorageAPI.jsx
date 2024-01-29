// APIDetails.jsx
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code_1 = `// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
cont data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();
`;

const code_2 = `// Save data to localStorage
localStorage.setItem('key', 'value');

// Get saved data from localStorage
cont data = localStorage.getItem('key');

// Remove saved data from localStorage
localStorage.removeItem('key');

// Remove all saved data from localStorage
localStorage.clear();`;

const WebStorageAPI = () => {

    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The Web Storage APIs: LocalStorage and SessionStorage
            </div>
            <div className='text-lg'>
                The Web Storage API has been designed to provide mechanisms by which browsers can store key/value pairs more intuitively than using cookies. There are two web storage APIs you should know:
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>The sessionStorage</li>
                    <li>The localStorage</li>
                </ul>
                You can use the session storage API when you need to save something for the page session’s duration (i.e., until the browser or the tab is closed). This means that everything will be available even if you reload the page. On the contrary, if you close your browser or the tab, the session storage will be flushed, and the data will be lost.

                On the other hand, local storage is also used to save something but in a persistent way. This means that the local storage is not flushed when the browser is closed and reopened. The only way to clear the localStorage is to call localStorage.clear().
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code_1}</code>
                </pre>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code_2}</code>
                </pre>
                <p className="text-md font-bold">Real Work Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Saving authentication tokens once a user is logged in</li>
                    <li>Saving the selected locale for multilingual websites</li>
                    <li>Storing the number of page views for the current session</li>
                </ul>
            </div>
        </>
    );
};

export default WebStorageAPI;
