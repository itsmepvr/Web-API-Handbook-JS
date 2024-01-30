// APIDetails.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebStorageAPI from '../api_details/WebStorageAPI';
import FetchAPI from '../api_details/FetchAPI';
import ClipboardAPI from '../api_details/ClipboardAPI';
import FullScreenAPI from '../api_details/FullScreenAPI'
import GeolocationAPI from '../api_details/GeolocationAPI';
import LazyLoadAPI from '../api_details/LazyLoadAPI';
import PageVisibilityAPI from '../api_details/PageVisibilityAPI';
import ResizeObserverAPI from '../api_details/ResizeObserverAPI';
import URLAPI from '../api_details/URLAPI';
import VibrationAPI from '../api_details/VibrationAPI';

const APIDetails = ({ apiNames, apiKey, handleEvent }) => {
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById('main-box').scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        // Check if myParam is null
        if (apiKey === null) {
            // Redirect to a different route
            navigate('/api_list');
        }
    }, [apiKey, navigate]);

    apiKey = parseInt(apiKey)

    let apiContent;

    switch (apiKey) {
        case 0:
            apiContent = (
                <WebStorageAPI />
            );
            break;
        case 1:
            apiContent = (
                <FetchAPI />
            );
            break;
        case 2:
            apiContent = (
                <ClipboardAPI />
            );
            break;
        case 3:
            apiContent = (
                <GeolocationAPI />
            );
            break;
        case 4:
            apiContent = (
                <PageVisibilityAPI />
            );
            break;
        case 5:
            apiContent = (
                <ResizeObserverAPI />
            );
            break;
        case 6:
            apiContent = (
                <URLAPI />
            );
            break;
        case 7:
            apiContent = (
                <VibrationAPI />
            );
            break;
        case 8:
            apiContent = (
                <FullScreenAPI />
            );
            break;
        case 9:
            apiContent = (
                <LazyLoadAPI />
            );
            break;
        default:
            apiContent = (
                // Default content when apiKey doesn't match any case
                <div>
                    <h2>Details for Unknown API</h2>
                    <p>No specific details available for the selected API.</p>
                </div>
            );
    }

    return (
        <div className="mx-0 sm:mx-auto max-w-4xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-6 flex-auto mt-4 mb-4 bg-white rounded">
            {apiContent}
            <br></br>
            <hr></hr>
            <br></br>
            <div className="flex flex-row justify-between">
                <div className={`api_details_button ${apiKey <= 0 ? 'disabled' : ''}`} onClick={(() => {
                    handleEvent(apiKey - 1);
                    navigate('/api_details');
                })
                }>Prev</div>
                <div className="api_details_button" onClick={() => navigate('/api_list')}>Back to List</div>
                <div className={`api_details_button ${apiKey >= 9 ? 'disabled' : ''}`} onClick={(() => {
                    handleEvent(apiKey + 1);
                    navigate('/api_details');
                })
                }>Next</div>
            </div>
        </div>
    );
};

export default APIDetails;
