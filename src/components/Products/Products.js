import React from 'react';
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
    return (
        <div>
            <div className="texto-container">
                <h2>Productos</h2>
            </div>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item" data-description={image.description}>
                        <img src={image.src} alt={image.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;