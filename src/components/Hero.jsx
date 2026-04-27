import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PortadaFondo from '../assets/Muebles/Fondo_portada.webp';

import './Hero.css';
// Using a placeholder URL that represents a furniture store for now, 
// can be replaced by a local asset 'company_hero.jpg' when provided
const heroImage = PortadaFondo;

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroImage} alt="Mueblería San Miguel - Showroom" />
                <div className="overlay"></div>
                <div className="vertical-slices">
                    <div className="slice-gap"></div>
                    <div className="slice-gap"></div>
                </div>
            </div>

            <div className="container hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Trabajamos para hacer de tu hogar <br /> <span className="highlight">un mejor espacio</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Fabricamos muebles que definen tu estilo. <br /> Calidad premium para mueblerías exigentes.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
