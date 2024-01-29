import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code = `const targetElement = document.getElementById('resizeTarget');

const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    console.log('Element size changed:', entry.contentRect.width, entry.contentRect.height);
  }
});

resizeObserver.observe(targetElement);

// Don't forget to disconnect the observer when it's no longer needed
// resizeObserver.disconnect();`;

const ResizeObserverAPI = () => {
    const resizeTargetRef = useRef(null);

    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();

        // Create a Resize Observer and observe the target element
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                console.log('Element size changed:', entry.contentRect.width, entry.contentRect.height);
            }
        });

        if (resizeTargetRef.current) {
            resizeObserver.observe(resizeTargetRef.current);
        }

        // Don't forget to disconnect the observer when it's no longer needed
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">The Resize Observer API</div>
            <div className='text-lg'>
                The Resize Observer API provides a way to observe changes to the size of an element. It allows you to react to changes in the dimensions of DOM elements.

                <p className="text-md font-bold my-2">Sample Resize Observer API Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-javascript">{code}</code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Create a `ResizeObserver` instance by passing a callback function.</li>
                    <li>Use `resizeObserver.observe` to start observing the target element.</li>
                    <li>The callback function is called whenever the observed element's size changes.</li>
                    <li>Remember to disconnect the observer when it's no longer needed using `resizeObserver.disconnect`.</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Implement responsive designs by adjusting layout based on element size changes.</li>
                    <li>Optimize performance by adapting UI components to varying screen sizes.</li>
                    <li>Handle dynamic content that may affect the size of specific elements.</li>
                </ul>
            </div>

            {/* <div
                id="resizeTarget"
                ref={resizeTargetRef}
                className="border border-dashed p-4 my-4 text-center"
                style={{ width: '300px', height: '150px' }}
            >
                Resize this element to see the changes!
            </div> */}
        </>
    );
};

export default ResizeObserverAPI;
