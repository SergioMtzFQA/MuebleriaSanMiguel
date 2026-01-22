import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // Added AuthProvider import
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <AuthProvider> {/* Nested AuthProvider */}
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider> {/* Nested AuthProvider */}
        </CartProvider>
    </React.StrictMode>,
);
