import React from 'react';
import { useNavigate } from 'react-router-dom';

const APIList = ({ apiNames, handleEvent }) => {

    const navigate = useNavigate();

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 flex-auto mx-auto mt-4 mb-4 bg-white rounded">
            <p className="text-center text-2xl font-bold text-red-600 my-5">Built-In Web API's in JavaScript</p>
            <div className="flex flex-col">
                {apiNames.map((apiName, i) => (
                    <div
                        className="apiListName"
                        key={i}
                        onClick={(() => {
                            handleEvent(i);
                            navigate('/api_details');
                        })
                        }
                    >
                        {i + 1}. {apiName}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default APIList;
