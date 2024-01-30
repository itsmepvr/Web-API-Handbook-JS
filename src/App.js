import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';

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

  useEffect(() => {
    // Update the document title when the component mounts
    document.title = 'Web API Handbook JS';

    // Optionally, you can reset the title when the component unmounts
    return () => {
      document.title = 'Web API Handbook JS';
    };
  }, []);

  return (
    <Router basename='/Web-API-Handbook-JS'>
      <Helmet>

        <title>Web API Handbook JS</title>
        <meta name="description" content="Handbook for Built-In Web API's in Javascript"></meta>

        <meta property="og:url" content="https://itsmepvr.github.io/Web-API-Handbook-JS"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Web API Handbook JS"></meta>
        <meta property="og:description" content="Handbook for Built-In Web API's in Javascript"></meta>
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/53a3f793-28a2-4447-bdbc-9c0531334f61.png?token=wB_UePiHANReil9NvBowEzK9X8uDCxLCsKmCXtFi5MY&height=248&width=1200&expires=33242600627"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="itsmepvr.github.io"></meta>
        <meta property="twitter:url" content="https://itsmepvr.github.io/Web-API-Handbook-JS"></meta>
        <meta name="twitter:title" content="Web API Handbook JS"></meta>
        <meta name="twitter:description" content="Handbook for Built-In Web API's in Javascript"></meta>
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/53a3f793-28a2-4447-bdbc-9c0531334f61.png?token=wB_UePiHANReil9NvBowEzK9X8uDCxLCsKmCXtFi5MY&height=248&width=1200&expires=33242600627"></meta>
        <meta name="google-site-verification" content="mQb-1F5ada5ps7O9RC8GVr81D5wJWdjKsD5pDcA9Nlc" />
      </Helmet>

      <div className="flex flex-col h-screen overflow-x-hidden custom-scrollbar" id="main-box">
        <NavigationHeader />

        <Suspense fallback={<div className="spinner"></div>}>
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
