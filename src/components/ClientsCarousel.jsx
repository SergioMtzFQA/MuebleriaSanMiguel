import React from 'react';
import './ClientsCarousel.css';

const ClientsCarousel = () => {
    // Placeholder client names/logos
    const clients = [
        "Muebles Troncoso", "Liverpool", "Palacio de Hierro",
        "Sears", "Coppel", "Elektra", "Famsa", "Gaia",
        "Ikea", "West Elm"
    ];

    return (
        <div className="clients-carousel">
            <h3>Nuestros Clientes</h3>
            <div className="carousel-track-container">
                <div className="carousel-track">
                    {/* Double the items for seamless infinite scroll */}
                    {[...clients, ...clients].map((client, index) => (
                        <div className="client-logo" key={index}>
                            <div className="client-logo" key={index}>
                                <div className="client-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#D4AF37' }}>
                                        <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 0 1 4 0v2" />
                                    </svg>
                                    <span>{client}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsCarousel;
