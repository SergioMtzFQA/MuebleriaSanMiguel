import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Featured.css';

const ProductCard = ({ product, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.images && product.images.length > 0 ? product.images : ['https://via.placeholder.com/400x300'];

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.div
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Link to={`/product/${product.id}`}>
                <div className="card-image">
                    <img
                        src={images[currentImageIndex]}
                        alt={product.name}
                        style={{ transition: 'opacity 0.5s ease-in-out' }} // Simple inline transition hint, though src swap is abrupt without double buffering
                    />
                    {/* You could add logic for 'New' badge based on date if desired */}
                </div>
                <div className="card-info">
                    <span>{product.category}</span>
                    <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{product.name}</h3>
                    {/* Description removed as requested */}
                    <span className="btn-link">Ver Detalles &rarr;</span>
                </div>
            </Link>
        </motion.div>
    );
};

const Featured = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/products`)
            .then(res => res.json())
            .then(data => {
                const featured = data.filter(p => p.isFeatured === true || p.isFeatured === 'true');
                setFeaturedProducts(featured);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching featured products:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return null; // Or a loader if preferred, but for landing page silence is often better

    if (featuredProducts.length === 0) return null; // Don't show section if no featured products

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
                    {featuredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;
