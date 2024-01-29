import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';

library.add(faArrowRight, faLinkedin, faGithub, faUser);

// Lazy-loaded components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const APIList = lazy(() => import('./components/APIList'));
const APIDetails = lazy(() => import('./components/APIDetails'));

const App = () => {
  const apiNames = [
    'The Web Storage APIs: LocalStorage and SessionStorage',
    'The Fetch API',
    'The Clipboard API',
    'The Geolocation API',
    'The Page Visibility API',
    'The Resize Observer API',
    'The URL API',
    'The Vibration API',
    'The FullScreen API',
    'The Lazyload API'
  ];

  let stored_key = sessionStorage.getItem('web_api_handbook_js_key');
  const [currentAPI, setCurrentAPI] = useState(stored_key);

  const handleCurrentAPI = (apiKey) => {
    setCurrentAPI(apiKey);
    sessionStorage.setItem('web_api_handbook_js_key', apiKey);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-x-hidden custom-scrollbar" id="main-box">
        <NavigationHeader />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/api_list" element={<APIList apiNames={apiNames} handleEvent={handleCurrentAPI} />} />
            <Route path="/api_details" element={<APIDetails apiNames={apiNames} apiKey={currentAPI} handleEvent={handleCurrentAPI} />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
