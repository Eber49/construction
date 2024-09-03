import React from 'react';
import '../styles/News.css';

const News = () => {
    return (
        <div className="news-container">
            <h2>Actualités</h2>
            <div className="news-item">
                <h3>Nouvelle 1</h3>
                <p>Détails sur la nouvelle 1...</p>
            </div>
            <div className="news-item">
                <h3>Nouvelle 2</h3>
                <p>Détails sur la nouvelle 2...</p>
            </div>
        </div>
    );
};

export default News;
