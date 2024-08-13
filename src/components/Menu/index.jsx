import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsList, BsX, BsHouse, BsTelephone, BsLightbulb, BsCardChecklist } from "react-icons/bs";
import './style.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuLoaded, setIsMenuLoaded] = useState(false);
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

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
            >
                {isOpen && isMenuLoaded ? (
                    <BsX size={30} />
                ) : (
                    <BsList size={30} color="#fff" />
                )}
            </button>

            <nav ref={menuRef} className={`side-menu ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <BsHouse /> Home
                        </a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <BsLightbulb /> Conhecimentos
                        </a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <BsCardChecklist /> Projetos
                        </a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <BsTelephone /> Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
