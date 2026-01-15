import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/hero_furniture_luxury.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroImage} alt="Luxury Furniture" />
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Diseño Exclusivo <br /> <span className="highlight">Para Tu Espacio</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Fabricamos muebles que definen tu estilo. Calidad premium para mueblerías exigentes.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link to="/catalog" className="btn btn-primary">Ver Catálogo</Link>
                    <a href="#contact" className="btn btn-secondary-outline">Cotizar Ahora</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
