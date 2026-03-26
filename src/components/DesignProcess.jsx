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
                    <h2>Fortalezas que nos distinguen</h2>
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
                        <div className="card-icon">Excelencia en materiales</div>
                        <p>Compromiso con el uso de materiales de alta calidad, garantizando durabilidad y confianza en cada producto.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="card-icon">Diseños elegantes y funcionales</div>
                        <p>Creación de muebles que combinan estética con practicidad para el hogar moderno.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="card-icon">Innovación constante</div>
                        <p>Búsqueda de nuevas tendencias y tecnologías en diseño y fabricación para mantenerte a la vanguardia.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="card-icon">Relaciones de largo plazo</div>
                        <p>Construcción de alianzas sólidas con las mejores mueblerías de México, basadas en confianza y resultados.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
