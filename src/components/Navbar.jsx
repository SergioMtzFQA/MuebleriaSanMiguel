import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { cartItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <Link to="/" className="logo">
                        <h2>Mueblerias San Miguel</h2>
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/catalog">Catálogo</Link></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <div className="nav-actions">
                    <Link to="/cart" className="cart-btn" aria-label="Cart">
                        🛒 <span className="cart-count">{cartItems.length}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
