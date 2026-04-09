import React from 'react';
import { motion } from 'framer-motion';
import './ClientsGrid.css';

// Logo imports
import coppelLogo from '../assets/logos/coppel.png';
import racLogo from '../assets/logos/rac.png';
import elizondoLogo from '../assets/logos/Elizondo.jpg';
import folyLogo from '../assets/logos/foly-muebles-logo.jpg';
import tamarindoLogo from '../assets/logos/Tamarindo.png';
import millerKnollLogo from '../assets/logos/millerknoll_logo_black_large.png';

const ClientsGrid = () => {
    // Array of objects representing clients with their corresponding imported logos.
    const clients = [
        { name: "COPPEL", logo: coppelLogo },
        { name: "RAC", logo: racLogo },
        { name: "MUEBLERIA ELIZONDO", logo: elizondoLogo },
        { name: "FOLY MUEBLES", logo: folyLogo },
        { name: "TAMARINDO", logo: tamarindoLogo },
        { name: "MILLER KNOLL", logo: millerKnollLogo },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="clients-grid-container">
            <h3 className="clients-header">Nuestros Clientes</h3>
            <p className="clients-subheader">Acompañando a las mejores marcas del país.</p>

            <motion.div
                className="clients-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {clients.map((client, index) => (
                    <motion.div
                        className="client-logo-card"
                        key={index}
                        variants={itemVariants}
                    >
                        <div className="client-card-inner">
                            <div className="logo-container">
                                <img src={client.logo} alt={`${client.name} logo`} className="client-logo-img" />
                            </div>
                            <div className="client-name-container">
                                <span className="client-name-text">{client.name}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ClientsGrid;
