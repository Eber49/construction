import React from 'react';
import '../styles/Home.css'; // Assurez-vous de lier le fichier CSS approprié

const Home = () => {
    return (
        <div>
            {/* Section Home */}
            <div className="home-container">
                <h2>Bienvenue sur notre site de construction</h2>
                <p>Nous sommes spécialisés dans la construction de maisons modernes et durables.</p>
                <p>Notre équipe d'experts vous accompagne dans la réalisation de vos projets, du début à la fin.</p>
                <p>Explorez nos réalisations et découvrez comment nous pouvons donner vie à vos idées.</p>
            </div>

            {/* Section Nos services */}
            <section className="services-container">
                <h2>Nos services</h2>
                <p>
                    Construction & Rénovation de maison, corps de ferme et bâtiment ancien.
                </p>

                {/* Section de trois cartes avec images */}
                <section className="three-sections">
                    <div className="service-card">
                        <img src="/images/maison-sur-mesure.jpg" alt="Maison sur mesure" />
                        <div className="overlay-card">
                            <h4>Maison sur mesure</h4>
                            <p>FAIRE CONSTRUIRE</p>
                            <a href="#" className="discover-link">Découvrir</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="/images/maison-ancienne.jpg" alt="Maison ancienne" />
                        <div className="overlay-card">
                            <h4>Maison ancienne</h4>
                            <p>À RÉNOVER</p>
                            <a href="#" className="discover-link">Découvrir</a>
                        </div>
                    </div>

                    <div className="service-card">
                        <img src="/images/maisons-realisees.jpg" alt="Maisons réalisées" />
                        <div className="overlay-card">
                            <h4>Maisons réalisées</h4>
                            <p>S'INSPIRER</p>
                            <a href="#" className="discover-link">Découvrir</a>
                        </div>
                    </div>
                </section>

                {/* Carte rectangulaire en dessous */}
                <div className="rectangular-card">
                    <img src="/images/visite-virtuelle.jpg" alt="Visite virtuelle" className="rectangular-card-image" />
                    <div className="rectangular-card-content">
                        <h3>Visites virtuelles</h3>
                        <p>Découvrez nos visites virtuelles qui vous permettront de vous projeter dans un intérieur de maison.</p>
                    </div>
                </div>
            </section>

            {/* Première grande section avec image à gauche et texte à droite */}
            <section className="large-section">
                <div className="section-content">
                    <div className="image-left">
                        <img src="/images/maison-normande.jpg" alt="Construction image" />
                    </div>
                    <div className="text-right">
                        <p>
                            Attachés à notre région depuis plus de 40 ans, nous construisons des maisons individuelles et rénovons du bâti ancien, en respectant les codes d’urbanisme locaux et la mosaïque de paysages contrastés qui fait le charme de la Lozère : landes, forêts, montagnes, falaises, canyons…
                        </p>
                        <p>
                            Constructeur et rénovateur référent, nous concevons votre projet sur mesure et à votre image.
                        </p>
                        <p>
                            Pour une construction moderne, classique, originale ou à ossature bois, pour une rénovation fidèle à l'histoire du bâti, notre bureau d’études et nos différentes équipes travailleront en fonction de vos envies, en vous proposant des plans totalement personnalisés.
                        </p>
                    </div>
                </div>
            </section>

            {/* Deuxième grande section avec deux rectangles séparés */}
            <section className="large-section">
                <h2>Information</h2>
                <div className="info-section">
                    {/* Premier rectangle à gauche */}
                    <div className="info-card">
                        <div className="info-card-image">
                            <img src="/images/annonces-immobilieres.jpg" alt="Annonces immobilières" />
                        </div>
                        <div className="info-card-content">
                            <p>
                                Découvrez diverses annonces de biens immobiliers disponibles en vente et localisation sur CoinAfrique annonces, votre site de petites annonces.
                            </p>
                        </div>
                    </div>

                    {/* Deuxième rectangle à droite */}
                    <div className="info-card">
                        <div className="info-card-image">
                            <img src="/images/vente-maison.jpg" alt="Vente maison" />
                        </div>
                        <div className="info-card-content">
                            <p>
                                Dans la catégorie Vente maison Abidjan, vous trouverez plus de 2600 annonces immobilières, par exemple : vente maison de caractère ou vente maison.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <h4>Navigation</h4>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Construction maison</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>
                
            </footer>
        </div>
    );
};

export default Home;
