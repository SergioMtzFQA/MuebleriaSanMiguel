import React from 'react';
import { motion } from 'framer-motion';
import './ClientsGrid.css';

const ClientsGrid = () => {
    // Array of objects representing clients. 
    // The logoUrls point to professional geometric architectural vector placeholders 
    // to simulate premium logos until real ones are provided.
    const clients = [
        { name: "Muebles Troncoso", logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80&blend=000000&blend-mode=screen&blend-alpha=90" },
        { name: "Liverpool", logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80&blend=000000&blend-mode=screen&blend-alpha=90" },
        { name: "Palacio de Hierro", logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80&blend=000000&blend-mode=screen&blend-alpha=90" },
        { name: "Sears", logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80&blend=000000&blend-mode=screen&blend-alpha=90" },
        { name: "Coppel", logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80&blend=000000&blend-mode=screen&blend-alpha=90" },
        { name: "Gaia", logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80&blend=000000&blend-mode=screen&blend-alpha=90" },
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
                        {/* We use a placeholder image structure here. 
                            When real logos are ready, src={client.logoUrl} will be used. 
                            For now, we simulate a logo block visually. */}
                        <div className="logo-placeholder">
                            <span className="logo-text-fallback">{client.name}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ClientsGrid;
