import React from 'react';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import About from '../components/About';

const Landing = () => {
    return (
        <div className="landing-page">
            <Hero />
            <Featured />
            {/* About is separate page now, but maybe a teaser? User only asked for Featured. Keeping it simple. */}
        </div>
    );
};

export default Landing;
