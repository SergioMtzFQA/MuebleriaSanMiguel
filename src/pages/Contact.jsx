import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const ContactPage = () => {
    return (
        <div className="page-container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Contáctanos</h1>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Información de Contacto</h3>
                            <p style={{ marginBottom: '1rem' }}>Estamos aqui para atenderte. Contáctanos para cotizaciones o dudas.</p>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <MapPin size={24} style={{ minWidth: '24px', color: 'var(--secondary)' }} />
                                <div>
                                    <strong>Dirección:</strong><br />
                                    Prol. Fidel Velázquez 1320 Col. San Felipe, Linares, Nuevo León, México
                                    C.P. 67714
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Phone size={24} style={{ minWidth: '24px', color: 'var(--secondary)' }} />
                                <div>
                                    <strong>Teléfono:</strong><br />
                                    +52 811 938 9548
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <Mail size={24} style={{ minWidth: '24px', color: 'var(--secondary)' }} />
                                <div>
                                    <strong>Email:</strong><br />
                                    humega75@gmail.com
                                </div>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe
                                title="Ubicación Mueblería San Miguel"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.726509192903!2d-99.56483282302514!3d24.873188744745086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867ced73e30d21f1%3A0xe82eecfde18359a9!2sSillas%20San%20Miguel!5e0!3m2!1ses-419!2smx!4v1769141069415!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '8px', minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
