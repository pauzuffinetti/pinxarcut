import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>📍 Dirección</h3>
                    <address>
                        <p>Carrer del Pi, 16, Ciutat Vella, 08002 Barcelona</p>
                    </address>

                    <h3>📞 Teléfono</h3>
                    <p><a href="tel:+34933024393" aria-label="Llamar al 933 024 393">933 024 393</a></p>

                    <h3>📧 Correo</h3>
                    <p><a href="mailto:xarcuterialapineda@gmail.com" aria-label="Enviar correo a xarcuterialapineda@gmail.com">xarcuterialapineda@gmail.com</a></p>
                </div>

                <div className="footer-column">
                    <h3>📲 Redes Sociales</h3>
                    <div className="social-links">
                        <p><a href="http://www.instagram.com/xarcuterialapineda" target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram de Xarcuteria La Pineda">📷 Instagram</a></p>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>📜 Datos Fiscales</h3>
                    <p>Comestibles la Pineda S.L.</p>
                    <p>B02664324</p>
                    <p>Calle del Pi 16, bajos, 08002 Barcelona</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="p-footer">&copy; 2025 Xarcuteria La Pineda. Todos los derechos reservados.</p>
                <a href="#menu" className="back-to-menu">Menú</a>
            </div>
        </footer>
    );
}

export default Footer;
