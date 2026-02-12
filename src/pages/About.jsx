import React from 'react';
import { motion } from 'framer-motion';
import ClientsCarousel from '../components/ClientsCarousel';
import '../components/About.css';

const AboutPage = () => {
    return (
        <div className="page-container" style={{ paddingTop: '80px' }}>
            <section className="about-section section-padding">
                <div className="container">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2>Acerca de Nosotros</h2>
                        <p className="lead">Sillas San Miguel: Tradición y Vanguardia en Diseño.</p>
                        <div className="about-grid">
                            <div className="about-text" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                                <p style={{ textAlign: 'center', display: 'block' }}>
                                    Somos una empresa dedicada a la fabricación de muebles de alta calidad,
                                    dirigida especialmente a mueblerías que buscan distinción y durabilidad para sus clientes.
                                    Con más de 20 años en el mercado, combinamos técnicas artesanales con tecnología moderna.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <ClientsCarousel />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
