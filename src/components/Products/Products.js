import React, { useState } from 'react';
import './Products.css';
import producto1 from '../../assets/producto1.jpg';
import producto2 from '../../assets/producto2.jpg';
import producto3 from '../../assets/producto3.jpg';

const images = [
  {
    src: producto1,
    title: 'Highlands',
    subtitle: 'Scotland',
    description: 'The mountains are calling',
  },
  {
    src: producto2,
    title: 'Machu Pichu',
    subtitle: 'Peru',
    description: 'Adventure is never far away',
  },
  {
    src: producto3,
    title: 'Chamonix',
    subtitle: 'France',
    description: 'Let your dreams come true',
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="products-container">
      <h2 className="slider-title">Productos</h2>
      <div className="slider">
        <button className="slider--btn slider--btn__prev" onClick={() => changeSlide(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="slides__wrapper">
          {images.map((image, index) => {
            const position =
              index === currentIndex
                ? 'current'
                : index === (currentIndex + 1) % images.length
                ? 'next'
                : 'previous';
            return (
              <div key={index} className={`slide ${position}`}>
                <div className="slide__inner">
                  <div className="slide--image__wrapper">
                    <img className="slide--image" src={image.src} alt={image.title} />
                  </div>
                  <div className={`slide-info ${position === 'current' ? 'visible' : ''}`}>
                    <h2>{image.title}</h2>
                    <h3>{image.subtitle}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="slider--btn slider--btn__next" onClick={() => changeSlide(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Products;
