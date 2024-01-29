import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0">
            <nav
                className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-gray-50 
        "
            >
                <div>
                    <Link to="/" className="navItem" onClick={() => setMenuOpen(false)}>
                        <img
                            src={process.env.PUBLIC_URL + '/images/logo.png'}
                            alt='Web API Handbook JS'
                            className="w-60 p-2 md:w-40 md:p-1 sm:w-40"
                        />
                    </Link>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={toggleMenu}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <div className={`${isMenuOpen ? '' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="menu">
                    <ul
                        className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
                    >
                        <li>
                            <NavLink exact="true" to="/" className="navItem" activeClassName="active" onClick={() => setMenuOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/api_list" className="navItem" activeClassName="active" onClick={() => setMenuOpen(false)}>
                                Web API's
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navItem" activeClassName="active" onClick={() => setMenuOpen(false)}>
                                <FontAwesomeIcon icon="fa-solid fa-user" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavigationHeader;
