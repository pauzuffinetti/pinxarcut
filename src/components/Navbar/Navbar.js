import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logowhite from '../../assets/Logowhite.png';

const Navbar = () => {
    const [hamburgerVisible, setHamburgerVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Muestra el icono de hamburguesa después de 500px de desplazamiento
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setHamburgerVisible(true);
            } else {
                setHamburgerVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="container">
            <img src={Logowhite} alt="Banner La Pineda" className="logo" />
            {hamburgerVisible ? (
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            ) : (
                <ul>
                    <li><a href="#historia">HISTORIA</a></li>
                    <li><a href="#equipo">NUESTRO EQUIPO</a></li>
                    <li><a href="#productos">PRODUCTOS</a></li>
                    <li><a href="#eventos">EVENTOS</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    <li>
                        <button className="btn" id="contacto"><a href="#contacto">CONTACTO</a></button>
                    </li>
                </ul>
            )}
            {/* Mostrar el menú cuando está abierto */}
            {menuOpen && (
                <ul className="menu" ref={menuRef}>
                    <li onClick={closeMenu}>HISTORIA</li>
                    <li onClick={closeMenu}>NUESTRO EQUIPO</li>
                    <li onClick={closeMenu}>PRODUCTOS</li>
                    <li onClick={closeMenu}>EVENTOS</li>
                    <li onClick={closeMenu}>BLOG</li>
                    <li>
                        <button className="btn" onClick={closeMenu}>
                            CONTACTO
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
