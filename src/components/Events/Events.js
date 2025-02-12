import React from 'react';
import './Events.css';
import eventos1 from '../../assets/eventos1.jpg';
import eventos2 from '../../assets/eventos2.jpg';
import eventos3 from '../../assets/eventos3.jpg';

const Events = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <div className="events-container" id="eventos">
      <div className="events-text">
        <h2>Eventos</h2>
        <p>
          En <strong>Xarcuteria La Pineda</strong>, ofrecemos servicios exclusivos para convertir cualquier ocasión en una experiencia gastronómica inolvidable. Nuestro enfoque combina la tradición culinaria española con un servicio personalizado, ideal para:
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <img src={eventos1} alt="event" />
          <h3>Catas de jamón ibérico y vinos</h3>
          <p>
            Descubre los mejores productos 100% ibéricos de bellota, maridados con vinos seleccionados para realzar cada sabor
          </p>
        </div>

        <div className="card">
          <img src={eventos2} alt="event" />
          <h3>Catering Personalizado</h3>
          <p>Diseñamos menús adaptados a tus necesidades para eventos corporativos, bodas, cumpleaños y más</p>
        </div>

        <div className="card">
          <img src={eventos3} alt="event" />
          <h3>Alquiler de espacio privado</h3>
          <p>Reserva nuestra xarcuteria para celebrar en un ambiente exclusivo y acogedor</p>
        </div>

        
      </div>
      <div className="events-text">
          <p>
            Además, participamos activamente en ferias gastronómicas en España y Europa, compartiendo nuestra pasión por la alta calidad con amantes de la buena mesa.
          </p>
          <button className="btn" onClick={handleScrollToContact}>
            Reserva tu evento hoy mismo
          </button>
        </div>
    </div>
  );
};

export default Events;
