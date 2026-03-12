import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {

    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/galeria" element={<Gallery />} />
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
