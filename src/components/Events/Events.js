import React from 'react';
import './Events.css';
import Vinos from '../../assets/Vinos.jpg';

const Events = () => {
  return (
    <div className="events-container" id="eventos">
      <h2>Eventos</h2>
      <p>
        En Xarcuteria La Pineda, convertimos cualquier ocasión en una experiencia única y memorable. 
        Nuestro espacio está disponible para eventos privados, caterings, catas de vinos y productos gourmet.
      <br/>Nuestro equipo está preparado para organizar eventos que destaquen por la atención al
detalle, la calidad de los productos y un servicio inigualable. Haz que tu evento sea
inolvidable en el corazón de Barcelona.</p>

    <div className="cards">
        <div className="card">
            <img src={Vinos} alt="event"/>
            <h3>Catas exclusivas</h3>
            <p>Degusta los mejores jamones 100% ibéricos de bellota y una
            selección de vinos especialmente elegidos para maridar.</p>
        </div>

        <div className="card">
            <img src={Vinos} alt="event"/>
            <h3>Catering Personalizado</h3>
            <p>Diseñamos menús a medida para eventos corporativos,
            reuniones familiares o celebraciones especiales.</p>
        </div>

        <div className="card">
            <img src={Vinos} alt="event"/>
            <h3>Espacio Privado</h3>
            <p>Reserva La Pineda para cerrar el local y disfrutar de un ambiente
            exclusivo con tu grupo.</p>
        </div>
        
    </div>
        </div>
  );
};

export default Events;
