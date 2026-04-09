import React from 'react';
import { motion } from 'framer-motion';
import ClientsGrid from '../components/ClientsGrid';
import aboutBg from '../assets/hero_furniture_luxury_opt.jpg'; // Optimizada para cargar más rápido
import '../components/About.css';

const AboutPage = () => {
    return (
        <div className="page-container about-page-bg" style={{ paddingTop: '80px', backgroundImage: `url(${aboutBg})` }}>
            <div className="about-overlay"></div>
            <section className="about-section section-padding" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
                <div className="container">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2>Acerca de Nosotros</h2>
                        <p className="lead">Muebles San Miguel: Tradición y Vanguardia en Diseño</p>
                        <div className="about-grid">
                            <div className="about-text" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                                <p style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                                    Muebles San Miguel comenzó su trayectoria en 2014 bajo el nombre de Sillas San Miguel<br />
                                    Cimentada en más de cuatro décadas de experiencia en la Industria de los Muebles.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                                    Desde sus inicios, ha mantenido una visión clara: ofrecer al mercado mexicano productos de
                                    calidad que combinen diseño, funcionalidad y accesibilidad.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                                    Hoy, nos distinguimos por ofrecer soluciones confiables y estéticamente atractivas para salas,
                                    comedores y espacios multifuncionales.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                                    Nuestra propuesta de valor se basa en tres pilares: Calidad en los materiales, Diseños pensados
                                    para la vida cotidiana y Precios competitivos que permiten a más familias acceder a Muebles
                                    duraderos y con estilo.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                                    Con un enfoque mayorista y una sólida red de distribución, Muebles San Miguel es una opción
                                    estratégica para negocios que buscan un proveedor comprometido con la Excelencia, la
                                    Puntualidad en entregas y una Atención personalizada.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>
                                    La marca continúa creciendo con una visión firme: ser referente nacional en
                                    Muebles que elevan el confort y la estética del hogar mexicano.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem' }}>
                            <ClientsGrid />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
