import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/icons/cupti-logo.svg'; 
import logoBlue from '../assets/icons/cupti-logo-blue.svg';
import menuBlue from "../assets/icons/menu-icon-blue.svg" 
import menuWhite from "../assets/icons/menu-icon.svg" 

function NavBar() {
  const [scrolled, setScrolled] = useState(window.scrollY > 50); // Se inicializa según la posición del scroll

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Comprobamos el scroll al cargar la página
    setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar container--fill ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container container--between'>
        <img src={scrolled ? logoBlue : logoWhite} alt="logo" className="navbar-logo" />
        <img src={scrolled ? menuBlue : menuWhite} alt="menu" className='navbar-menu'/>
        <ul className='navbar-links-container'>
          <li><Link to="/" className='navbar-links'>Inicio</Link></li>
          <li><Link to="/" className='navbar-links'>Servicios</Link></li>
          <li><Link to="/" className='navbar-links'>Proyectos</Link></li>
          <li><Link to="/" className='navbar-links'>Contacto</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
