import React from 'react';
import Hero from '../components/Hero';
import DesignProcess from '../components/DesignProcess';
import Collections from '../components/Collections';
import AboutSummary from '../components/AboutSummary';

const Landing = () => {
    return (
        <div className="landing-page">
            <Hero />
            <DesignProcess />
            <AboutSummary />
            {/* <Collections /> */}

        </div>
    );
};

export default Landing;
