import React, { useEffect, useState } from 'react';
import './Hero.css';
import Tienda from '../../assets/Tienda.jpg';
import jamones from '../../assets/jamones.jpg';
import Vinos from '../../assets/Vinos.jpg';
import Frascos from '../../assets/Frascos.jpg';


const images = [Tienda, jamones, Vinos, Frascos];

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
                ></div>
            ))}
            {/* <div className="hero-text">
                <h1>XARCUTERIA LA PINEDA</h1>
                <p>Des del’any 1930</p>
            </div> */}
        </div>
    );
};

export default Hero;
