import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Nom de l'entreprise</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about-us">À propos de nous</Link></li>
                    <li><Link to="/construction">Construction maison</Link></li>
                    <li><Link to="/projects">Réalisations</Link></li>
                    <li><Link to="/news">Actualités</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
