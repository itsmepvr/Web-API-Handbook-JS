import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });`;

const FetchAPI = () => {
  useEffect(() => {
    // Trigger highlighting on component mount
    hljs.highlightAll();
  }, []);

  return (
    <>
      <div className="text-2xl font-bold text-center py-2">The Fetch API</div>
      <div className='text-lg'>
        The Fetch API provides a simple interface for fetching resources (like data) across the network. It is a modern replacement for XMLHttpRequest and provides a more powerful and flexible feature set.

        <p className="text-md font-bold my-2">Sample Fetch API Code:</p>
        <pre className="my-4 border-2 rounded">
          <code className="language-javascript">{code}</code>
        </pre>

        <p className="text-md font-bold my-2">Explanation:</p>
        <ul className="list-disc pl-10 sm:pl-5">
          <li>The `fetch` function is used to make a network request.</li>
          <li>The response is checked for its status using `response.ok`.</li>
          <li>If the response is successful, the data is extracted using `response.json()`.</li>
          <li>The data is then logged to the console.</li>
          <li>Error handling is done using the `catch` block.</li>
        </ul>

        <p className="text-md font-bold my-2">Use Cases:</p>
        <ul className="list-disc pl-10 sm:pl-5 my-2">
          <li>Fetching data from a REST API in a React application.</li>
          <li>Uploading files to a server using a POST request.</li>
          <li>Interacting with third-party APIs to get or send data.</li>
        </ul>
      </div>
    </>
  );
};

export default FetchAPI;
