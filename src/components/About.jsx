import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Acerca de Nosotros</h2>
                    <p className="lead">Mueblerias San Miguel: Tradición y Vanguardia en Diseño.</p>
                    <div className="about-grid">
                        <div className="about-text">
                            <p>
                                Somos una empresa dedicada a la fabricación de muebles de alta calidad,
                                dirigida especialmente a mueblerías que buscan distinción y durabilidad para sus clientes.
                                Con más de 20 años en el mercado, combinamos técnicas artesanales con tecnología moderna.
                            </p>
                            <div className="contact-info-block">
                                <h4>Contáctanos</h4>
                                <p><strong>Teléfono:</strong> +52 555 123 4567</p>
                                <p><strong>Email:</strong> ventas@mueblessanmiguel.com</p>
                                <p><strong>Dirección:</strong> Av. del Mueble 123, Zona Industrial, CDMX.</p>
                            </div>
                        </div>
                        <div className="about-image">
                            <div className="placeholder-box">Imagen de Taller/Fábrica</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
