import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `// Get user's current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      console.log('Current location:', { latitude, longitude });
    },
    error => {
      console.error('Geolocation error:', error);
    }
  );
} else {
  console.error('Geolocation is not supported by this browser.');
}`;

const GeolocationAPI = () => {
    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The Geolocation API</div>
            <div className='text-lg'>
                The Geolocation API provides a way to retrieve the geographic location of a user's device. It allows you to access the user's current location.

                <p className="text-md font-bold my-2">Sample Geolocation API Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code}</code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Check if the Geolocation API is supported by the browser using `navigator.geolocation`.</li>
                    <li>Use `navigator.geolocation.getCurrentPosition` to get the current position.</li>
                    <li>The success callback receives a `position` object containing the latitude and longitude.</li>
                    <li>The error callback handles cases where the location cannot be retrieved.</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Implement location-based features in your web application.</li>
                    <li>Provide personalized content based on the user's location.</li>
                    <li>Create location-aware experiences, such as maps or weather applications.</li>
                </ul>
            </div>
        </>
    );
};

export default GeolocationAPI;
