import React from 'react';
import Dropdown from './Dropdown';
import '../styles/Dropdown.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Dropdown
                    title="Home"
                    items={['Savoir-faire', 'Qualités', 'Garantie', 'Partenaire']}
                />
                <Dropdown
                    title="About Us"
                    items={['Étude de terrain pour faire construire', 'Exemples et Plans']}
                />
                <Dropdown
                    title="Construction maison"
                    items={['Faire construire sa maison: les étapes']}
                />
                <div className="dropdown">
                    <button className="dropdown-btn">News</button>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Project</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
