import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
      >
        {menuOpen ? (
          <span className="close-icon">✖</span>
        ) : (
          <>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </>
        )}
      </button>

      <ul className={`menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <li onClick={closeMenu}><a href="#historia">HISTORIA</a></li>
        <li onClick={closeMenu}><a href="#equipo">NUESTRO EQUIPO</a></li>
        <li onClick={closeMenu}><a href="#jamones">JAMONES</a></li>
        <li onClick={closeMenu}><a href="#productos">PRODUCTOS</a></li>
        <li onClick={closeMenu}><a href="#eventos">EVENTOS</a></li>
        <li onClick={closeMenu}><a href="#blog">BLOG</a></li>
        <li><a href="#contacto" className="btn" onClick={closeMenu}>CONTACTO</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
