import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturedGallery.css';

import mueble1 from '../assets/Muebles/Mueble1.png';
import mueble2 from '../assets/Muebles/Mueble2.png';
import mueble3 from '../assets/Muebles/Mueble3.jpeg';
import mueble4 from '../assets/Muebles/Mueble4.jpeg';
import mueble5 from '../assets/Muebles/Mueble5.jpg';
import mueble6 from '../assets/Muebles/Mueble6.PNG';
import mueble7 from '../assets/Muebles/Mueble7.PNG';
import mueble8 from '../assets/Muebles/Mueble8.PNG';

const FeaturedGallery = () => {
    const images = [
        { id: 1, src: mueble1, alt: "Mueble San Miguel 1" },
        { id: 2, src: mueble2, alt: "Mueble San Miguel 2" },
        { id: 3, src: mueble3, alt: "Mueble San Miguel 3" },
        { id: 4, src: mueble4, alt: "Mueble San Miguel 4" },
        { id: 5, src: mueble5, alt: "Mueble San Miguel 5" },
        { id: 6, src: mueble6, alt: "Mueble San Miguel 6" },
        { id: 7, src: mueble7, alt: "Mueble San Miguel 7" },
        { id: 8, src: mueble8, alt: "Mueble San Miguel 8" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const thumbnailsRef = useRef(null);

    useEffect(() => {
        if (thumbnailsRef.current && thumbnailsRef.current.children[currentIndex]) {
            thumbnailsRef.current.children[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
            });
        }
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="featured-gallery-section section-padding">
            <div className="container">
                <div className="featured-gallery-header">
                    <span className="subtitle-sm">INSPIRACIÓN PARA TU HOGAR</span>
                    <h2>Nuestros Mejores Espacios</h2>
                </div>

                <div className="gallery-container">
                    {/* Main Image View */}
                    <div className="gallery-main-view">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex].src}
                                alt={images[currentIndex].alt}
                                className="main-image"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button className="nav-arrow prev" onClick={handlePrev} aria-label="Previous Image">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="nav-arrow next" onClick={handleNext} aria-label="Next Image">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Thumbnails Row */}
                    <div className="gallery-thumbnails" ref={thumbnailsRef}>
                        {images.map((image, index) => (
                            <button
                                key={image.id}
                                className={`thumbnail-btn ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(index)}
                                aria-label={`View ${image.alt}`}
                            >
                                <img src={image.src} alt={`Thumbnail ${index + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedGallery;
