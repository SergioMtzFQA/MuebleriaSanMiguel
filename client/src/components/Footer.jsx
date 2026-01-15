import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <div className="footer-section brand">
                    <h3>Mueblerias San Miguel</h3>
                    <p>Diseño y calidad para tu hogar. Fabricantes exclusivos.</p>
                </div>
                <div className="footer-section links">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/catalog">Catálogo</Link></li>
                        <li><a href="#about">Acerca de</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h4>Contacto</h4>
                    <p>ventas@mueblessanmiguel.com</p>
                    <p>+52 555 123 4567</p>
                    <div className="socials">
                        {/* Social icons placeholders */}
                        <span>FB</span>
                        <span>IG</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mueblerias San Miguel. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
