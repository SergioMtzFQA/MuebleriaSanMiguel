import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';

const MOCK_FEATURED = [
    { id: 1, name: 'Sofá Imperial', category: 'Sala', image: 'https://via.placeholder.com/400x300?text=Sofa+Imperial', description: 'Confort y elegancia en terciopelo.', isNew: true },
    { id: 2, name: 'Comedor Real', category: 'Comedor', image: 'https://via.placeholder.com/400x300?text=Comedor+Real', description: 'Madera de roble con acabados finos.', isNew: false },
    { id: 3, name: 'Sillón Lounge', category: 'Sala', image: 'https://via.placeholder.com/400x300?text=Sillon+Lounge', description: 'Diseño minimalista moderno.', isNew: true },
];

const Featured = () => {
    return (
        <section className="featured section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Productos Destacados</h2>
                    <p>Lo mejor de nuestra colección exclusiva.</p>
                </motion.div>

                <div className="products-grid">
                    {MOCK_FEATURED.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="product-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                                {product.isNew && <span className="badge-new">Nuevo</span>}
                            </div>
                            <div className="card-info">
                                <span>{product.category}</span>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <button className="btn-link">Ver Detalles &rarr;</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
