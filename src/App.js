import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow'; // Importer le diaporama
import Home from './components/Home'; // Importer Home (qui contient aussi Nos services)

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Slideshow /> {/* Diaporama */}
                    <Home /> {/* Section Home + Nos Services */}
                    {/* Routes ou autres sections */}
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
