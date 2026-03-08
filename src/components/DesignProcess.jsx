import React from 'react';
import { motion } from 'framer-motion';
import './DesignProcess.css';

const DesignProcess = () => {
    return (
        <section className="design-process">
            <div className="blueprint-overlay"></div>
            <div className="container process-content section-padding">
                <motion.div
                    className="process-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="process-subtitle">DISEÑO Y FABRICACIÓN</span>
                    <h2>Características Que Nos Distinguen</h2>
                    <div className="header-line"></div>
                </motion.div>

                <div className="process-grid">
                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="card-icon">01</div>
                        <h3>Materiales Premium</h3>
                        <p>Seleccionamos maderas finas y acabados de la más alta calidad para asegurar durabilidad y belleza incomparable en cada pieza que construimos.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="card-icon">02</div>
                        <h3>Diseño Atemporal</h3>
                        <p>Inspirados en líneas limpias y elegancia sobria, nuestros diseños superan las tendencias pasajeras para convertirse en clásicos de tu hogar.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="card-icon">03</div>
                        <h3>Precios Competitivos</h3>
                        <p>Al ser fabricantes directos, optimizamos nuestros procesos para ofrecerte lujo y exclusividad sin intermediarios, directo de nuestra planta a tu sala.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
