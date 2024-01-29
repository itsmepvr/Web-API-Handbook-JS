import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `// Check if fullscreen is supported
if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
  const elementToFullscreen = document.getElementById('elementId');

  // Request fullscreen
  if (elementToFullscreen) {
    if (elementToFullscreen.requestFullscreen) {
      elementToFullscreen.requestFullscreen();
    } else if (elementToFullscreen.webkitRequestFullscreen) {
      elementToFullscreen.webkitRequestFullscreen();
    }
  }
} else {
  console.log('Fullscreen API is not supported');
}`;

const FullscreenAPI = () => {

    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    const handleFullscreen = () => {
        // Check if fullscreen is supported
        if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
            const elementToFullscreen = document.getElementById('elementId');

            // Request fullscreen
            if (elementToFullscreen) {
                if (elementToFullscreen.requestFullscreen) {
                    elementToFullscreen.requestFullscreen();
                } else if (elementToFullscreen.webkitRequestFullscreen) {
                    elementToFullscreen.webkitRequestFullscreen();
                }
            }
        } else {
            console.log('Fullscreen API is not supported');
        }
    };

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The Fullscreen API</div>
            <div className='text-lg'>
                The Fullscreen API provides a way to request fullscreen mode for an element, allowing you to create immersive user experiences.

                <p className="text-md font-bold my-2">Sample Fullscreen API Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code}</code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Check if the Fullscreen API is supported using the `document.fullscreenEnabled` and `document.webkitFullscreenEnabled` checks.</li>
                    <li>Identify the element you want to make fullscreen by its ID (replace 'elementId' with your actual element ID).</li>
                    <li>Request fullscreen using the appropriate method based on browser support (`requestFullscreen` or `webkitRequestFullscreen`).</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Create fullscreen multimedia experiences, such as videos or image galleries.</li>
                    <li>Enhance presentations or slideshows with a fullscreen display of content.</li>
                    <li>Improve the readability of content by maximizing screen real estate.</li>
                </ul>
            </div>

            {/* <div className="flex items-center my-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleFullscreen}
                >
                    Request Fullscreen
                </button>
            </div> */}
        </>
    );
};

export default FullscreenAPI;
