import React from 'react';
import './Historia.css';
import historia from '../../assets/historia.jpeg';

const Historia = () => {
    return (
        <div className="historia">

            <div className="seccion-item">
                <img src={historia} alt="fotografía de la tienda" />
                
                <div className="texto-container" id="historia">
                    <h2>Historia</h2>
                    <p><strong>Fundada en 1904</strong>, Xarcuteria La Pineda es un icono gastronómico en Barcelona. Desde sus primeros días, ha sido un referente en el sector alimentario, destacándose por su compromiso con la calidad y la tradición.</p>
                    <p>En sus primeros años, La Pineda fue regentada por la <strong>Familia Verdaguer</strong> hasta que, en 1930, el señor <strong>Florenci Mir</strong> adquirió el negocio. Desde entonces, la familia Mir ha trabajado incansablemente para preservar la esencia del local, manteniendo gran parte de su decoración original y transmitiendo sus valores de generación en generación.</p>
                    <p>El esfuerzo conjunto de Florenci, su esposa, su hermano Pedro y su cuñada marcó los primeros pasos de La Pineda. Tras el fallecimiento de Florenci en 1994, su sobrino <strong>Pedro Mir Rodes</strong> tomó las riendas, asegurando que el legado familiar continuara vivo. Con más de un siglo de historia, La Pineda sigue siendo un puente hacia los sabores auténticos de la gastronomía española.</p>
                    <p>Nuestra tradición también se refleja en los productos que ofrecemos, muchos de los cuales han sido parte de nuestra selección durante más de 20 años. Esta continuidad asegura una experiencia culinaria única que conecta a nuestros clientes con las raíces de la cocina española.</p>
                </div>
            </div>
        </div>
    );
};

export default Historia;
 