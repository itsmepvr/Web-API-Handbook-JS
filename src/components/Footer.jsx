// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 p-4 text-center mt-auto">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} <a target='_blank' rel='noreferrer' href='https://itsmepvr.github.io'>Venkata Ramana P</a>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
