import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminGuard from './components/AdminGuard';

function App() {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/products') || location.pathname.startsWith('/login');

    return (
        <div className="app-container">
            {!isAdminRoute && <Navbar />}
            <main>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={
                        <ProtectedRoute>
                            <AdminGuard>
                                <Admin />
                            </AdminGuard>
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<Landing />} />
                </Routes>
            </main>
            {!isAdminRoute && <Footer />}
        </div>
    );
}

export default App;
