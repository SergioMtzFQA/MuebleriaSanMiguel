import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Collections.css';

const Collections = () => {
    return (
        <section className="collections section-padding">
            <div className="container">
                <motion.div
                    className="collections-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="subtitle-sm">EXPLORA NUESTRO CATÁLOGO</span>
                    <h2>Colecciones Exclusivas</h2>
                </motion.div>

                <div className="masonry-grid">
                    <motion.div
                        className="grid-item item-large"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1200&auto=format&fit=crop" alt="Salas" />
                        <div className="grid-overlay">
                            <div className="content">
                                <h3>Salas</h3>
                                <Link to="/contact" className="collection-link">Descubrir &rarr;</Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid-item item-medium"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" alt="Comedores" />
                        <div className="grid-overlay">
                            <div className="content">
                                <h3>Comedores</h3>
                                <Link to="/contact" className="collection-link">Descubrir &rarr;</Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid-item item-small"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop" alt="Sillas" />
                        <div className="grid-overlay">
                            <div className="content">
                                <h3>Sillas y Sofás</h3>
                                <Link to="/contact" className="collection-link">Descubrir &rarr;</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Collections;
