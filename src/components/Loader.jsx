import React from 'react';
import './Loader.css';

const Loader = ({ size = 'small', color = 'white' }) => {
    return (
        <div
            className={`loader loader-${size} loader-${color}`}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default Loader;
