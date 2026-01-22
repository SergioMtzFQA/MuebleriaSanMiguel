import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedVariants, setSelectedVariants] = useState({});

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                // Determine if ID is string based (timestamp) or number
                // Mock data is int, new products are timestamp (int)
                const found = data.find(p => p.id == id);
                setProduct(found);
                if (found && found.images && found.images.length > 0) {
                    setSelectedImage(found.images[0]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="container" style={{ paddingTop: '100px' }}>Cargando...</div>;
    if (!product) return <div className="container" style={{ paddingTop: '100px' }}>Producto no encontrado</div>;

    const handleVariantChange = (variantName, value) => {
        setSelectedVariants(prev => ({ ...prev, [variantName]: value }));
    };

    const handleAddToCart = () => {
        // Validate that ALL variants are selected, if any exist
        if (product.variants && product.variants.length > 0) {
            const allVariantsSelected = product.variants.every(v => selectedVariants[v.name]);
            if (!allVariantsSelected) {
                alert('Por favor selecciona todas las variantes disponibles.');
                return;
            }
        }

        addToCart(product, selectedVariants);
        navigate('/cart');
    };

    return (
        <div className="product-detail-page container">
            <div className="product-layout">
                <motion.div
                    className="product-gallery"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="main-image">
                        <img src={selectedImage || 'https://via.placeholder.com/600x400'} alt={product.name} />
                    </div>
                    {product.images && product.images.length > 1 && (
                        <div className="thumbnail-list">
                            {product.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt="thumbnail"
                                    onClick={() => setSelectedImage(img)}
                                    className={selectedImage === img ? 'active' : ''}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                <motion.div
                    className="product-info"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <span className="category">{product.category}</span>
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>

                    {product.materials && product.materials.length > 0 && (
                        <div className="materials-section">
                            <h4>Materiales:</h4>
                            <ul>
                                {product.materials.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                        </div>
                    )}

                    {product.stock && (
                        <p style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
                            Disponibles: {product.stock}
                        </p>
                    )}

                    {product.variants && (
                        <div className="variants-section">
                            {product.variants.map((v) => (
                                <div key={v.name} className="variant-group">
                                    <label>{v.name}:</label>
                                    <div className="variant-options">
                                        {v.options.map((opt) => (
                                            <button
                                                key={opt}
                                                className={`variant-btn ${selectedVariants[v.name] === opt ? 'selected' : ''}`}
                                                onClick={() => handleVariantChange(v.name, opt)}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="actions">
                        <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                            Agregar a Cotización
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;
