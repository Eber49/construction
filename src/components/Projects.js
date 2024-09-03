import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Nos Réalisations</h2>
            <div className="project">
                <h3>Projet A</h3>
                <p>Description du projet A...</p>
            </div>
            <div className="project">
                <h3>Projet B</h3>
                <p>Description du projet B...</p>
            </div>
            <div className="project">
                <h3>Projet C</h3>
                <p>Description du projet C...</p>
            </div>
        </div>
    );
};

export default Projects;
