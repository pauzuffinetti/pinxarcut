
import React, { useEffect, useState } from 'react';
import './Hero.css';
import primera from '../../assets/primera.jpg';
import segunda from '../../assets/segunda.jpg';
import tercera from '../../assets/tercera.jpg';
import cuarta from '../../assets/cuarta.jpg';
import quinta from '../../assets/quinta.jpg';
import sexta from '../../assets/sexta.jpg';
import septima from '../../assets/septima.jpg';
import octava from '../../assets/octava.jpg';
import novena from '../../assets/novena.jpg';
import decima from '../../assets/decima.jpg';
import once from '../../assets/once.jpg';
import doce from '../../assets/doce.jpg';
import trece from '../../assets/trece.jpg';
import catorce from '../../assets/catorce.jpg';
import quince from '../../assets/quince.jpg';

const images = [
    primera, segunda, tercera, cuarta, quinta, sexta, septima, octava,
    novena, decima, once, doce, trece, catorce, quince
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`hero-image ${index === currentIndex ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                    role="img"
                    aria-label={`Imagen ${index + 1}`}
                ></div>
            ))}
        </div>
    );
};

export default Hero;