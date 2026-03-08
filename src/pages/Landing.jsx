import React from 'react';
import Hero from '../components/Hero';
import FeaturedGallery from '../components/FeaturedGallery';
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
            <FeaturedGallery />

        </div>
    );
};

export default Landing;
