import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedVariants, setSelectedVariants] = useState({});

    // Zoom State
    const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/products`)
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

    // Zoom Handlers
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: 'scale(2)' // Adjust scale factor as needed
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({
            transformOrigin: 'center center',
            transform: 'scale(1)'
        });
    };

    return (
        <div className="product-detail-page container">
            <div className="product-layout">
                <div className="product-full-header">
                    <span className="category">{product.category}</span>
                    <h1>{product.name}</h1>
                </div>

                <div className="product-main-content">
                    <motion.div
                        className="product-gallery"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="main-image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                            <img
                                src={selectedImage || 'https://via.placeholder.com/600x400'}
                                alt={product.name}
                                style={zoomStyle}
                                className="zoomable-image"
                            />
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

                    <div className="product-specs-container">
                        <motion.div
                            className="specs-column left"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {product.materials && product.materials.length > 0 && (
                                <div className="materials-section">
                                    <h4>Materiales</h4>
                                    <ul>
                                        {product.materials.map((m, i) => <li key={i}>{m}</li>)}
                                    </ul>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            className="specs-column right"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {product.variants && product.variants.length > 0 && (
                                <div className="variants-section">
                                    {product.variants.map((v) => (
                                        <div key={v.name} className="materials-section">
                                            <h4>{v.name === 'Color' ? 'Colores Disponibles' : v.name}</h4>
                                            <ul>
                                                {v.options.map((opt, i) => <li key={i}>{opt}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <motion.div
                        className="product-description-side"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h3>Descripción</h3>
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                    </motion.div>
                </div>

                {product.descriptionImages && product.descriptionImages.length > 0 && (
                    <motion.div
                        className="description-images-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {product.descriptionImages.map((img, idx) => (
                            <img key={idx} src={img} alt="Detalle del producto" style={{ width: '100%' }} />
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
