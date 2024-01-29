import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const code_1 = ``;

const LazyLoadAPI = () => {

    useEffect(() => {
        // Trigger highlighting on component mount
        hljs.highlightAll();
    }, []);

    return (
        <>
            <div className="text-2xl font-bold text-center py-2">Lazy Loading Images</div>
            <div className='text-lg'>
                Lazy loading is a technique that defers the loading of non-critical resources, such as images, until they are needed. In HTML, you can use the
                <pre className="my-4 border-2 rounded">
                    <code>loading</code>
                </pre> attribute to enable lazy loading for images.

                <p className="text-md font-bold my-2">Sample Lazy Loading Code:</p>
                <pre className="my-4 border-2 rounded">
                    <code className="language-html">
                        {`<img src="image.jpg" alt="Description" loading="lazy" />`}
                    </code>
                </pre>

                <p className="text-md font-bold my-2">Explanation:</p>
                <ul className="list-disc pl-10 sm:pl-5">
                    <li>Add the <pre className="my-4 border-2 rounded"><code>loading="lazy"</code></pre> attribute to the <pre className="my-4 border-2 rounded"><code>&lt;img&gt;</code></pre> element.</li>
                    <li>Lazy loading allows the browser to decide when to load the image based on the user's viewport.</li>
                </ul>

                <p className="text-md font-bold my-2">Use Cases:</p>
                <ul className="list-disc pl-10 sm:pl-5 my-2">
                    <li>Improve page load performance by loading images only when they are about to come into the user's view.</li>
                    <li>Optimize bandwidth usage by loading images on demand.</li>
                    <li>Enhance the user experience by speeding up the initial page load time.</li>
                </ul>
            </div>

            <div className="flex items-center my-4">
                {/* You can include an example lazy-loaded image here */}
                <img
                    src="https://placekitten.com/400/300"  // Replace with your image URL
                    alt="Lazy Loaded Kitten"
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default LazyLoadAPI;
