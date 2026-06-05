import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {

    return (
        <div className="app-container">
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Landing />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
