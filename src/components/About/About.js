import React from 'react';
import './About.css';
import Tienda from '../../assets/Tienda.jpg';
import Duenios from '../../assets/Duenios.jpg';

const About = () => {
    return (
        <div className="seccion-doble">
            <div className="imagen-container">
                <img src={Tienda} alt="fotografía de la tienda" />
            </div>

            <div className="texto-container" id="historia">
                <h2>Historia</h2>
                <p><strong>Fundada en 1904</strong>, Xarcuteria La Pineda es un icono gastronómico en Barcelona. Desde sus primeros días, ha sido un referente en el sector alimentario, destacándose por su compromiso con la calidad y la tradición.</p>
                <p>En sus primeros años, La Pineda fue regentada por la <strong>Familia Verdaguer</strong> hasta que, en 1930, el señor <strong>Florenci Mir</strong> adquirió el negocio. Desde entonces, la familia Mir ha trabajado incansablemente para preservar la esencia del local, manteniendo gran parte de su decoración original y transmitiendo sus valores de generación en generación.</p>
                <p>El esfuerzo conjunto de Florenci, su esposa, su hermano Pedro y su cuñada marcó los primeros pasos de La Pineda. Tras el fallecimiento de Florenci en 1994, su sobrino <strong>Pedro Mir Rodes</strong> tomó las riendas, asegurando que el legado familiar continuara vivo. Con más de un siglo de historia, La Pineda sigue siendo un puente hacia los sabores auténticos de la gastronomía española.</p>
                <p>Nuestra tradición también se refleja en los productos que ofrecemos, muchos de los cuales han sido parte de nuestra selección durante más de 20 años. Esta continuidad asegura una experiencia culinaria única que conecta a nuestros clientes con las raíces de la cocina española.</p>
            </div>

            <div className="texto-container">
                <h2>Equipo</h2>
                <p>En Xarcuteria La Pineda, cada miembro de nuestro equipo encarna nuestra pasión por la calidad y el servicio. Desde 2016, hemos incorporado nuevos talentos que combinan tradición y modernidad para llevar la experiencia de La Pineda a otro nivel.</p>
                <p>Expertos gastronómicos y enólogos conforman nuestro equipo, incluyendo un cortador de jamón con más de 10 años de experiencia en el sector. Este profesional asegura que cada loncha de nuestro jamón ibérico sea un testimonio de la dedicación y el respeto por los productos de alta calidad.</p>
                <p>Además, nuestro personal de sala ha sido formado en gastronomía y enología, garantizando un conocimiento profundo de cada producto y una atención personalizada para cada cliente. Ellos son el alma de La Pineda, creando un ambiente acogedor donde los sabores de España se convierten en experiencias inolvidables.</p>
                <p>La esencia de nuestro equipo reside en su compromiso con la excelencia y la pasión por compartir lo mejor de la tradición culinaria española con el mundo. Cada día, trabajamos para que cada visita a La Pineda sea un recuerdo único.</p>
            </div>

            <div className="imagen-container">
                <img src={Duenios} alt="fotografía familiar" />
            </div>
        </div>
    );
};

export default About;
