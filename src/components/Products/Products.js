import React, { useState } from 'react';
import './Products.css';
import producto1 from '../../assets/producto1.jpg';
import producto2 from '../../assets/producto2.jpg';
import producto3 from '../../assets/producto3.jpg';
import producto4 from '../../assets/producto4.jpg';
import producto5 from '../../assets/producto5.jpg';
import producto6 from '../../assets/producto6.jpg';
import producto7 from '../../assets/producto7.jpg';

const images = [
    { src: producto1, description: 'Jamón crudo' },
    { src: producto2, description: 'producto' },
    { src: producto3, description: 'producto' },
    { src: producto4, description: 'producto' },
    { src: producto5, description: 'producto' },
    { src: producto6, description: 'producto' },
    { src: producto7, description: 'producto' },
];

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="products-container">
            <div className="texto-container" id="productos">
                <h2>Productos</h2>
            </div>
            <div className="carousel-container">
                <button className="carousel-button prev" onClick={prevImage}>
                    {'<'}
                </button>
                <div className="carousel-item">
                    <img src={images[currentIndex].src} alt={images[currentIndex].description} />
                    <p>{images[currentIndex].description}</p>
                </div>
                <button className="carousel-button next" onClick={nextImage}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Products;
