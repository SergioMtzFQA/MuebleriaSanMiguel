import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) return;

        // Here you would send data to backend
        console.log('Sending quote:', { cartItems, formData });

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            clearCart();
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="cart-page container section-padding success-message">
                <h2>¡Cotización Enviada!</h2>
                <p>Gracias, {formData.name}. Nos pondremos en contacto contigo pronto.</p>
                <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container section-padding">
            <h1>Tu Solicitud de Cotización</h1>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>No tienes productos en tu lista.</p>
                    <Link to="/catalog" className="btn btn-primary">Ver Catálogo</Link>
                </div>
            ) : (
                <div className="cart-layout">
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-img">
                                    <img src={item.images[0]} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <div className="item-variants">
                                        {Object.entries(item.variants).map(([key, val]) => (
                                            <span key={key}>{key}: {val}</span>
                                        ))}
                                    </div>
                                    <p className="item-qty">Cantidad: {item.quantity}</p>
                                </div>
                                <button onClick={() => removeFromCart(index)} className="remove-btn">Eliminar</button>
                            </div>
                        ))}
                    </div>

                    <div className="quote-form-container">
                        <h3>Datos de Contacto</h3>
                        <form onSubmit={handleSubmit} className="quote-form">
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Correo Electrónico</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Teléfono</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mensaje Adicional</label>
                                <textarea
                                    rows="4"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Solicitar Cotización</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
