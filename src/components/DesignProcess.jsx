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
                        <div className="card-icon">01</div>
                        <h3>Excelencia en materiales</h3>
                        <p>Compromiso con el uso de materales alta calidad, garantizando durabilidad y confianza en cada producto.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="card-icon">02</div>
                        <h3>Diseño elegante y funcionales</h3>
                        <p>Creación de muebles que combinan estética con practicidad para el hogar moderno.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="card-icon">03</div>
                        <h3>Inovación constante</h3>
                        <p>Búsqueda de nuevas tendencias y tecnologías en Diseño y fabricación para mantenerte a la vanguardia.</p>
                    </motion.div>

                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="card-icon">04</div>
                        <h3 >Relaciones de largo plazo</h3>
                        <p>Construcción de alianzas sólidas con las mejores mueblerías de México, basadas en confianza y resultados.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
