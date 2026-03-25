import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutBg from '../assets/Muebles/Fondo_portada.jpeg'; // Optimizada para cargar más rápido
import './AboutSummary.css';

const AboutSummary = () => {
    return (
        <section
            className="about-summary section-padding"
            id="about-summary"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${aboutBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Sobre Nosotros</h2>
                        <h3 className="subtitle">Descubre muebles de calidad en Muebles San Miguel</h3>

                        <p className="lead">
                            Muebles San Miguel comenzó su trayectoria en 2014, cimentada en más de cuatro décadas de experiencia en la industria de los muebles.
                        </p>
                        <p>
                            Desde nuestros inicios, hemos mantenido una visión clara: ofrecer al mercado mexicano productos de excelente calidad que combinen diseño, funcionalidad y accesibilidad para cada hogar. Hoy nos distinguimos por soluciones confiables y estéticamente atractivas para salas y comedores.
                        </p>
                        <p>
                            Nuestra propuesta se basa en materiales premium, diseños pensados para la vida cotidiana y precios competitivos.
                        </p>
                        <div className="about-actions mt-4">
                            <Link to="/about" className="btn btn-primary" style={{ marginRight: '16px' }}>Conoce Nuestra Historia</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSummary;
