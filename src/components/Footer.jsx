import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mueblerias San Miguel. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
