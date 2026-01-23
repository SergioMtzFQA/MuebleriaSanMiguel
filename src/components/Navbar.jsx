import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
            </div>
        </nav>
    );
};

export default Navbar;
