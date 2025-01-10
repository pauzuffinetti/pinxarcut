import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logowhite from '../../assets/Logowhite.png';

const Navbar = () => {
    const [hamburgerVisible, setHamburgerVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='container'>
            <img src={Logowhite} alt="Banner La Pineda" className='logo' />
            {hamburgerVisible ? (
                <button className='hamburger' onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            ) : (
                <ul>
                    <li>HISTORIA</li>
                    <li>NUESTRO EQUIPO</li>
                    <li>PRODUCTOS</li>
                    <li>EVENTOS</li>
                    <li>BLOG</li>
                    <li><button className='btn'>CONTACTO</button></li>
                </ul>
            )}
            {menuOpen && (
                <ul className='menu'>
                    <li>HISTORIA</li>
                    <li>NUESTRO EQUIPO</li>
                    <li>PRODUCTOS</li>
                    <li>EVENTOS</li>
                    <li>BLOG</li>
                    <li><button className='btn'>CONTACTO</button></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
