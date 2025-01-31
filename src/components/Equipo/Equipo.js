import React from 'react';
import './Equipo.css';
import equipo from '../../assets/equipo.jpg';

const Equipo = () => {
  return (
    <div className="equipo">

            <div className="seccion-item">
                <div className="texto-container" id="equipo">
                    <h2>Equipo</h2>
                    <p>En Xarcuteria La Pineda, cada miembro de nuestro equipo encarna nuestra pasión por la calidad y el servicio. Desde 2016, hemos incorporado nuevos talentos que combinan tradición y modernidad para llevar la experiencia de La Pineda a otro nivel. </p>
                      <p>Expertos gastronómicos y enólogos conforman nuestro equipo, incluyendo un cortador de jamón con más de 10 años de experiencia en el sector. Este profesional asegura que cada loncha de nuestro jamón ibérico sea un testimonio de la dedicación y el respeto por los productos de alta calidad.</p>
                      <p>Además, nuestro personal de sala ha sido formado en gastronomía y enología, garantizando un conocimiento profundo de cada producto y una atención personalizada para cada cliente. Ellos son el alma de La Pineda, creando un ambiente acogedor donde los sabores de España se convierten en experiencias inolvidables.</p>
                      <p>La esencia de nuestro equipo reside en su compromiso con la excelencia y la pasión por compartir lo mejor de la tradición culinaria española con el mundo. Cada día, trabajamos para que cada visita a La Pineda sea un recuerdo único.</p>
                </div>

                <img src={equipo} alt="fotografía del equipo" />
            </div>
        </div>
  );
}

export default Equipo;
