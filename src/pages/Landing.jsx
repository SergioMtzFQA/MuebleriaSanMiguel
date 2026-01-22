import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import About from '../components/About';

const Landing = () => {
    return (
        <div className="landing-page">
            <Hero />
            <Featured />
            <About />
        </div>
    );
};

export default Landing;
