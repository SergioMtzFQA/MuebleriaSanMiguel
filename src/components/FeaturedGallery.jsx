import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './FeaturedGallery.css';

import mueble1 from '../assets/Muebles/Mueble1.png';
import mueble2 from '../assets/Muebles/Mueble2.png';
import mueble4 from '../assets/Muebles/Mueble4.jpeg';
import mueble6 from '../assets/Muebles/Mueble6.PNG';
import mueble7 from '../assets/Muebles/Mueble7.PNG';
import mueble8 from '../assets/Muebles/Mueble8.PNG';
import newMueble10 from '../assets/Muebles/Fondo_portada.jpeg';
import smartBG1 from '../assets/Muebles/SmartBG_2025-01-10_bf165f47-d24a-4771-8fcb-687a689d8fa6.png';
import smartBG2 from '../assets/Muebles/SmartBG_2025-05-02_9606bd62-33d7-44af-9188-2b60ef36b829.png';
import smartBG3 from '../assets/Muebles/SmartBG_2025-05-02_c05353f9-e483-4178-8959-c887bf87694d.png';
import smartBG4 from '../assets/Muebles/SmartBG_2025-05-02_ee65e294-c534-481e-9a33-5ca4c3cb6f61.png';
import smartBG5 from '../assets/Muebles/SmartBG_2025-05-21_dd64bb4d-4c92-415b-80c7-af2cbe15fc41.png';
import smartBG6 from '../assets/Muebles/SmartBG_2025-08-20_3476cbbb-ff3e-47bc-8d1d-ed4cc134fbde.png';
import smartBG7 from '../assets/Muebles/SmartBG_2025-09-24_eafb5990-1faa-46b1-97c8-91bdf890207e.png';
import smartBG8 from '../assets/Muebles/SmartBG_2025-08-20_f887ef5f-9bd0-4564-82d0-5184b24909e9.png';
import smartBG9 from '../assets/Muebles/SmartBG_2025-08-21_e4dccec2-cd41-47ba-aea2-f9d036722cb8.png';
import smartBG10 from '../assets/Muebles/SmartBG_2025-09-26_dd1bba9c-4ef6-4988-a87d-0201901bda14.png';
import smartBG11 from '../assets/Muebles/SmartBG_2026-02-04_e0f8741b-fd05-4805-a7bc-987256f36d0f (1).png';
import smartBG12 from '../assets/Muebles/SmartBG_2026-02-06_b5516b8f-dbda-467d-a61b-f1481f006b55 (1).png';
import smartBG13 from '../assets/Muebles/SmartBG_2026-04-09_8d9f20d9-d844-48f6-b418-a76a3f3efdb6.png';
import smartBG14 from '../assets/Muebles/SmartBG_2026-04-09_e9fb4d20-3921-40d7-a0ad-e8e7d1bf07a8.png';

const FeaturedGallery = () => {
    const images = [
        { id: 3, src: mueble1, alt: "Mueble San Miguel 1" },
        { id: 12, src: mueble2, alt: "Mueble San Miguel 2" },
        { id: 8, src: mueble4, alt: "Mueble San Miguel 4" },
        { id: 9, src: mueble6, alt: "Mueble San Miguel 6" },
        { id: 7, src: mueble7, alt: "Mueble San Miguel 7" },
        { id: 6, src: mueble8, alt: "Mueble San Miguel 8" },
        { id: 21, src: newMueble10, alt: "Mueble San Miguel 10" },
        { id: 11, src: smartBG1, alt: "Diseño San Miguel 1" },
        //{ id: 17, src: smartBG2, alt: "Diseño San Miguel 2" },
        { id: 17, src: smartBG3, alt: "Diseño San Miguel 3" },
        { id: 15, src: smartBG4, alt: "Diseño San Miguel 4" },
        { id: 13, src: smartBG5, alt: "Diseño San Miguel 5" },
        { id: 18, src: smartBG6, alt: "Diseño San Miguel 6" },
        { id: 16, src: smartBG7, alt: "Diseño San Miguel 7" },
        { id: 10, src: smartBG8, alt: "Diseño San Miguel 8" },
        { id: 5, src: smartBG9, alt: "Diseño San Miguel 9" },
        { id: 20, src: smartBG10, alt: "Diseño San Miguel 10" },
        { id: 2, src: smartBG11, alt: "Diseño San Miguel 11" },
        { id: 14, src: smartBG12, alt: "Diseño San Miguel 12" },
        { id: 1, src: smartBG13, alt: "Diseño San Miguel 13" },
        { id: 4, src: smartBG14, alt: "Diseño San Miguel 14" }
    ].sort((a, b) => a.id - b.id);

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
