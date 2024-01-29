import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('Page is now visible');
  } else {
    console.log('Page is now hidden');
  }
});`;

const PageVisibilityAPI = () => {
    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The Page Visibility API</div>
            <div className='text-lg'>
                The Page Visibility API provides a way to determine whether a page is currently visible or not. It allows you to listen for changes in the page's visibility state.

                <p className="text-md font-bold my-2">Sample Page Visibility API Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code}</code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Use `document.addEventListener` to listen for the `visibilitychange` event.</li>
                    <li>The event is triggered whenever the visibility state of the page changes.</li>
                    <li>Check `document.visibilityState` to determine whether the page is visible or hidden.</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Pause or adjust resource-intensive tasks when the page is not visible.</li>
                    <li>Track user engagement metrics by monitoring page visibility changes.</li>
                    <li>Implement features that depend on whether the page is currently visible.</li>
                </ul>
            </div>
        </>
    );
};

export default PageVisibilityAPI;
