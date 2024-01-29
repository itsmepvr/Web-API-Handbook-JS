// About.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div className="container mx-auto mt-4 text-center h-full">

            <div className="h-5/6 flex flex-col items-center justify-center">
                <img src={process.env.PUBLIC_URL + '/images/dev.webp'} alt='Developer' className="rounded-full w-40" />
                <p className="p-2 text-lg font-bold lg:text-4xl md:text-2xl sm:text-lg">Venkata Ramana Reddy P</p>
                <p className="p-2 text-base font-bold lg:text-lg md:text-lg sm:text-base">Full Stack Developer</p>
                <div className="flex flex-row justify-center">
                    <a target="_blank" rel="noreferrer" href='https://linkedin.com/in/itsmepvr'>
                        <FontAwesomeIcon className="text-4xl p-5" icon="fa-brands fa-linkedin" />
                    </a>
                    <a target="_blank" rel="noreferrer" href='https://github.com/itsmepvr'>
                        <FontAwesomeIcon className="text-4xl p-5" icon="fa-brands fa-github" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
