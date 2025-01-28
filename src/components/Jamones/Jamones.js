import React, { useState } from 'react';
import './Jamones.css';
import maldonado from '../../assets/maldonado.jpg';
import joselito from '../../assets/joselito.jpg';
import cincojotas from '../../assets/cincojotas.jpg';
import belloterra from '../../assets/belloterra.jpg';

const Jamones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      img: joselito,
      title: 'Joselito | Gran Reserva',
      origin: 'Guijuelo, Salamanca',
      characteristics: 'Jamón 100% ibérico de bellota con 5 años de curación. Este jamón gran reserva es reconocido por su textura suave y su sabor delicado con un toque dulce en el final. Su curación prolongada resalta su carácter único, convirtiéndolo en una obra maestra culinaria.',
      ideal: 'Aquellos que buscan un sabor suave y refinado.'
    },
    {
      img: cincojotas,
      title: 'Cinco Jotas | Selección privada',
      origin: 'Jabugo, Huelva',
      characteristics: 'Jamón 100% ibérico de bellota con 4 años de curación. Este jamón de reserva destaca por su sabor intenso y sutil, con un equilibrio perfecto entre la grasa y la carne que lo convierte en una experiencia única.',
      ideal: 'Los amantes de sabores ricos e intensos.'
    },
    {
      img: belloterra,
      title: 'Belloterra | Reserva Exclusiva',
      origin: 'Valle de los Pedroches, Córdoba',
      characteristics: 'Jamón 100% ibérico de bellota con 4 años de curación. Su aroma dulce y su sabor intenso lo convierten en un placer inolvidable para el paladar. Este jamón refleja la calidad de los pastos y el clima únicos de la región.',
      ideal: 'Aquellos que buscan un equilibrio entre aroma dulce e intensidad.'
    },
    {
      img: maldonado,
      title: 'Maldonado | Añada Seleccionada',
      origin: 'Badajoz, Extremadura',
      characteristics: 'Jamón 100% ibérico de bellota con 3.5 años de curación. Este jamón destaca por su encamisado con una ligera capa de grasa que realza su sabor intenso y su aroma característico de encina. Un verdadero tesoro de las bodegas de Albuquerque.',
      ideal: 'Los que desean un sabor potente con notas de madera y tradición.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="jamones-container">
      <div className="jamones-text" id="jamones">
        <h2>Jamones</h2>
        <p>En Xarcuteria La Pineda, celebramos la tradición gastronómica española con una selección incomparable de jamones ibéricos de bellota. Somos la única tienda en Barcelona que  los cuatro tipos de denominación de origen del jamón ibérico, una experiencia que atrae a amantes de la gastronomía de toda la región.</p>
        <p>Nuestros jamones son cuidadosamente seleccionados para ofrecer la máxima calidad y cada uno con características únicas que los convierten en un verdadero manjar.</p>
      </div>

      <div className='carousel-container'>
        <button onClick={handlePrev} className="carousel-button prev">‹</button>
        <div className='carousel-item'>
          <div className='carousel-img'>
            <img src={items[currentIndex].img} alt={items[currentIndex].title}></img>
          </div>
          <div className='carousel-text'>
            <h3>{items[currentIndex].title}</h3>
            <ul>
              <li>Origen: {items[currentIndex].origin}</li>
              <li>Características: {items[currentIndex].characteristics}</li>
              <li>Ideal para: {items[currentIndex].ideal}</li>
            </ul>
          </div>
        </div>
        <button onClick={handleNext} className="carousel-button next">›</button>
      </div>
    </div>
  );
};

export default Jamones;
