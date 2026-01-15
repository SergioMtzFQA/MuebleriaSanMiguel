import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Catalog.css';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('Todos');

    useEffect(() => {
        fetch('/api/products')
            .then(res => {
                if (!res.ok) throw new Error('Error al cargar productos');
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container" style={{ paddingTop: '100px' }}>Cargando productos...</div>;
    if (error) return <div className="container" style={{ paddingTop: '100px' }}>Error: {error}</div>;

    // Derive categories from fetched data
    const categories = ['Todos', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'Todos'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="catalog-page container">
            <div className="catalog-header">
                <h1>Catálogo de Productos</h1>
                <div className="filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                className="catalog-grid"
                layout
            >
                {filteredProducts.map(product => (
                    <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="product-card"
                    >
                        <Link to={`/product/${product.id}`}>
                            <div className="card-image">
                                <img src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/400x300'} alt={product.name} />
                            </div>
                            <div className="card-info">
                                <span>{product.category}</span>
                                <h3>{product.name}</h3>
                                <p>${parseInt(product.price).toLocaleString()}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Catalog;
