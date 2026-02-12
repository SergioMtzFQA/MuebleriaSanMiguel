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
                    <h2>¿Quienes somos?</h2>
                    <p className="lead">Sillas San Miguel: Tradición y Vanguardia en Diseño.</p>
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
                        <div className="about-image map-container">
                            <iframe
                                title="Ubicación Mueblería San Miguel"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.726509192903!2d-99.56483282302514!3d24.873188744745086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867ced73e30d21f1%3A0xe82eecfde18359a9!2sSillas%20San%20Miguel!5e0!3m2!1ses-419!2smx!4v1769141069415!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '350px', borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <a
                                    href="https://maps.app.goo.gl/gWTA45oPG6n11xSk7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link"
                                    style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}
                                >
                                    📍 Abrir en Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
