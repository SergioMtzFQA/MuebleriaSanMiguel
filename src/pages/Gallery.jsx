import React from 'react';
import FeaturedGallery from '../components/FeaturedGallery';

const Gallery = () => {
    return (
        <div className="gallery-page" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
            <FeaturedGallery />
        </div>
    );
};

export default Gallery;
