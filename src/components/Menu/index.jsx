import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList, BsX } from "react-icons/bs";
import "./style.css";
import Logo from '../../../public/favicon.ico';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand mr-auto" href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          style={{ zIndex: 1050 }}
        >
          {isOpen ? <BsX size={30} color="#fff" /> : <BsList size={30} color="#fff" />}
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
          ref={menuRef}
          style={{ zIndex: 1040 }}
        >
          <ul className={`navbar-nav ${isOpen ? 'ml-auto' : 'ms-auto'}`}>
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Conhecimentos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
