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
                        <p className="lead">Muebles San Miguel: Tradición y Vanguardia en Diseño.</p>
                        <div className="about-grid">
                            <div className="about-text" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                                <p style={{ textAlign: 'center', display: 'block' }}>
                                    Muebles San Miguel comenzó su trayectoria en 2014 bajo el nombre Sillas San Miguel,
                                    cimentada en más de cuatro décadas de experiencia en la industria de los muebles.
                                    Desde sus inicios, ha mantenido una visión clara: ofrecer al mercado mexicano productos de calida
                                    que combinen diseño, funcionalidad y accesibilidad.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block' }}>
                                    Hoy, Muebles San Miguel se distingue por ofrecer soluciones confiables y estéticamente atractivas para salas,
                                    comedores y espacios multifuncionales. Su propuesta de valor se basa en tres pilares: calidad en los materiales,
                                    diseños pensados para la vida cotidiana y precios competitivos que permiten a más familias acceder a muebles duraderos y con estilo.
                                </p>
                                <p style={{ textAlign: 'center', display: 'block' }}>
                                    Con un enfoque mayorista y una sólida red de distribución, Muebles San Miguel es una opción estratégica para negocios que buscan un proveedor
                                    comprometido con la excelencia, la puntualidad en entregas y una atención personalizada. La marca continúa creciendo con una visión firme:
                                    ser un referente nacional en muebles que elevan el confort y la estética del hogar mexicano.
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
