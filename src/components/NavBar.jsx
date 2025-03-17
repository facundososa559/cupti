import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/icons/cupti-logo.svg'; 
import logoBlue from '../assets/icons/cupti-logo-blue.svg';
import menuBlue from "../assets/icons/menu-icon-blue.svg";
import menuWhite from "../assets/icons/menu-icon.svg";
import {motion, AnimatePresence} from "framer-motion"

function NavBar() {
  const [scrolled, setScrolled] = useState(window.scrollY > 50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);

      if (!mobileView) {
        setMenuOpen(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(prev => !prev);
    }
  };

  return (
    <div className={`navbar container--fill ${scrolled || menuOpen ? 'scrolled' : ''}`}>
      <div className='navbar-container container--between'>
        <img src={scrolled || menuOpen ? logoBlue : logoWhite} alt="logo" className="navbar-logo" />
        
        {isMobile && (
          <img 
            src={scrolled || menuOpen ? menuBlue : menuWhite} 
            alt="menu" 
            className='navbar-menu' 
            onClick={toggleMenu} 
          />
        )}

        <AnimatePresence>
          {(menuOpen || !isMobile) && (
            <motion.ul 
              className={`navbar-links-container ${menuOpen && isMobile ? 'menu-open' : ''}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <li><Link to="/" className='navbar-links' onClick={toggleMenu}>Inicio</Link></li>
              <li><Link to="/" className='navbar-links' onClick={toggleMenu}>Servicios</Link></li>
              <li><Link to="/" className='navbar-links' onClick={toggleMenu}>Proyectos</Link></li>
              <li><Link to="/" className='navbar-links' onClick={toggleMenu}>Contacto</Link></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavBar;
