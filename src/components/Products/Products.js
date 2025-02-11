import React, { useState } from "react";
import "./Products.css";
import producto1 from "../../assets/producto1.jpg";
import producto2 from "../../assets/producto2.jpg";
import producto3 from "../../assets/producto3.jpg";
import producto4 from "../../assets/producto4.jpg";
import producto5 from "../../assets/producto5.jpg";
import producto6 from "../../assets/producto6.jpg";
import producto7 from "../../assets/producto7.jpg";
import producto8 from "../../assets/producto8.jpg";

const images = [
  { src: producto1, title: "Coppa, cabezada de cerdo ibérico de bellota de Salamanca Joselito" },
  { src: producto2, title: "Fuet, Carne magra de cerdo, Lleida Balaguer, Biher" },
  { src: producto3, title: "Presa, cuña de presa de Bellota 100% Ibérico de Huelva Jabugo, Cinco Jotas" },
  { src: producto4, title: "Cecina de rubia Gallega, Entrecot de vaca vieja, macerada durante 7 semanas con diferentes especies. Secreto N7, Galicia" },
  { src: producto5, title: "Bocadillo de Jamón Ibérico de Bellota de 4 años de curación" },
  { src: producto6, title: "Atún en Escabeche, La cala" },
  { src: producto7, title: "Troncho de Teruel, queso de cabra de Aragón" },
  { src: producto8, title: "Anchoa Doña Tomasa, Santoña Calibre 00" },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="products-container" id="productos">
      <h2 className="slider-title">Productos</h2>
      <div className="slider">
        <button className="slider--btn slider--btn__prev" onClick={() => changeSlide(-1)}>
          ◀
        </button>

        <div className="slide">
          <img className="slide--image" src={images[currentIndex].src} alt={images[currentIndex].title} />
          <div className="slide-info">
            <h3>{images[currentIndex].title}</h3>
          </div>
        </div>

        <button className="slider--btn slider--btn__next" onClick={() => changeSlide(1)}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Products;