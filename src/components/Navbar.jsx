import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo">
                    <Link to="/" className="logo">
                        <h2>Sillas San Miguel</h2>
                    </Link>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="/catalog" onClick={() => setMenuOpen(false)}>Catálogo</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
