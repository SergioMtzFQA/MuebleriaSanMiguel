import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';
// Using a placeholder URL that represents a furniture store for now, 
// can be replaced by a local asset 'company_hero.jpg' when provided
const heroImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src={heroImage} alt="Mueblería San Miguel - Showroom" />
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
                    <Link to="/catalog" className="btn btn-yellow">Ver Catálogo</Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
