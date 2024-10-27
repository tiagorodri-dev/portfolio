import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList, BsX } from "react-icons/bs";
import './style.css';
import Logo from '../../../public/favicon.ico';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuLoaded, setIsMenuLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => {
                setIsMenuLoaded(true);
            }, 300);
        } else {
            setIsMenuLoaded(false);
            setIsOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuLoaded(false);
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
            className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'fixed-menu' : ''}`}
            style={{ position: isScrolled ? 'fixed' : 'absolute', zIndex: 1002, width: "100%" }}
        >
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
            >
                {isOpen && isMenuLoaded ? <BsX size={30} color="#fff" /> : <BsList size={30} color="#fff" />}
            </button>

            <div
                ref={menuRef}
                className={`side-menu ${isOpen ? 'open' : ''} d-lg-none d-flex flex-column align-items-center`} style={{gap: "40px"}}
            >
                <img src={Logo} alt="Logo" />
                <ul className="navbar-nav">
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

            <div className="collapse navbar-collapse d-none d-lg-flex justify-content-around align-items-center">
                <img src={Logo} alt="Logo" />

                <ul className="navbar-nav">
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
        </nav>
    );
}

export default Menu;
