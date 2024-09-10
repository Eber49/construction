import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Assurez-vous de lier le fichier CSS approprié

const slides = [
    {
        image: '/images/img1.jpg',
        text: "Faire construire sur mesure"
    },
    {
        image: '/images/img2.jpg',
        text: "Rénovation et réhabilitation de votre ancienne bâtisse"
    },
    {
        image: '/images/img3.jpg',
        text: "Architectes et artisans qualifiés à votre service"
    },
    {
        image: '/images/img4.jpg',
        text: "Construction écologique et durable"
    },
    {
        image: '/images/img5.jpg',
        text: "Votre projet, notre expertise"
    }
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Change d'image toutes les 5 secondes

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const goToPrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="slideshow">
            {/* Flèche gauche */}
            <button className="prev" onClick={goToPrev}>
                &#10094;
            </button>

            {/* Diaporama d'images avec texte */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {index === currentSlide && (
                        <div className="slideshow-text">{slide.text}</div>
                    )}
                </div>
            ))}

            {/* Flèche droite */}
            <button className="next" onClick={goToNext}>
                &#10095;
            </button>
        </div>
    );
};

export default Slideshow;
