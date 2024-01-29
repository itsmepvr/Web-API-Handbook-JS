// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6 flex-auto mt-4 mb-4 bg-white rounded">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Web API Handbook</h1>
                <p className="text-lg">
                    Explore the power of Built-In Web APIs in JavaScript and discover why they are essential in modern
                    web development.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">What are Web APIs?</h2>
                <p>
                    Web APIs (Application Programming Interfaces) are a set of rules and tools that allow
                    different software applications to communicate with each other over the internet. In
                    JavaScript, Web APIs are commonly used to interact with external services, retrieve data,
                    and perform various operations without reloading the entire web page.
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Why are Web APIs Useful?</h2>
                <p>
                    Web APIs enable developers to integrate third-party services, access data from external
                    sources, and create dynamic and interactive web applications. They play a crucial role in
                    building modern single-page applications (SPAs) and facilitate the development of
                    responsive and connected user experiences.
                </p>
            </div>

            <div className='mt-4'>
                <Link to="/api_list" className="navItem text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 drop-shadow-lg rounded transition-all duration-300 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                        Web API's &nbsp; <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Home;
