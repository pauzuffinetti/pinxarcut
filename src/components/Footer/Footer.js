import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="p-footer">&copy; 2025 Xarcuteria La Pineda. Todos los derechos reservados.</p>
                <ul className="social-links">
                    <li><p> xarcuterialapineda@gmail.com </p></li>
                    <li><a href="http://www.instagram.com/xarcuterialapineda" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    {/* <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li> */}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;