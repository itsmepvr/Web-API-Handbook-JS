import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `// Check if the Vibration API is supported
if ('vibrate' in navigator) {
  // Vibrate for 200 milliseconds
  navigator.vibrate(200);
} else {
  console.log('Vibration API is not supported');
}`;

const VibrationAPI = () => {
    const handleVibration = () => {
        // Check if the Vibration API is supported
        if ('vibrate' in navigator) {
            // Vibrate for 200 milliseconds
            navigator.vibrate(200);
        } else {
            console.log('Vibration API is not supported');
        }
    };

    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The Vibration API</div>
            <div className='text-lg'>
                The Vibration API provides a way to trigger device vibrations, allowing you to provide haptic feedback to users.

                <p className="text-md font-bold my-2">Sample Vibration API Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code}</code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Check if the Vibration API is supported using the `'vibrate' in navigator` check.</li>
                    <li>Use `navigator.vibrate(duration)` to trigger device vibrations for the specified duration.</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Provide tactile feedback to users in response to specific events or interactions.</li>
                    <li>Create a more engaging user experience by incorporating haptic feedback.</li>
                    <li>Enhance accessibility by using vibrations to convey information or alerts.</li>
                </ul>
            </div>

            {/* <div className="flex items-center my-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleVibration}
                >
                    Trigger Vibration
                </button>
            </div> */}
        </>
    );
};

export default VibrationAPI;
