import { useState, useEffect } from "react";
import capa from "../../../assets/capa.jpg";
import Menu from "../Navbar";
import ParticleBackground from "../../shared/ParticleBackground/ParticleBackground";
import "./style.css";
import ArrowButton from "../../ui/ArrowDownButton";

function Header() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const roles = [
    "",
    "Desenvolvedor Web",
    "Analista de Sistemas",
    "Desenvolvedor Front-end",
    "Desenvolvedor Fullstack",
  ];

  useEffect(() => {
    let typingTimeout;

    const type = (currentCharIndex = 0) => {
      const currentText = roles[index];

      if (currentCharIndex < currentText.length) {
        setText((prev) => prev + currentText[currentCharIndex]);
        typingTimeout = setTimeout(() => type(currentCharIndex + 1), 150);
      } else {
        typingTimeout = setTimeout(() => erase(currentText.length), 1000);
      }
    };

    const erase = (currentCharIndex) => {
      if (currentCharIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        typingTimeout = setTimeout(() => erase(currentCharIndex - 1), 100);
      } else {
        setIndex((prev) => (prev + 1) % roles.length);
        setText("");
        typingTimeout = setTimeout(() => type(), 500);
      }
    };

    type();

    return () => clearTimeout(typingTimeout);
  }, [index]);

  return (
    <header className="header-bg" id="inicio">
      <ParticleBackground />
      <Menu />

      <div className="banner container">
        <div className="banner-content">
          <p>
            Eu sou <span className="destaque">Tiago Alves Rodrigues</span> e
            atuo como
          </p>
          <h1>{text}</h1>
          <p className="descricao">
            Desenvolvendo soluções inovadoras e criando experiências marcantes
            para os usuários
          </p>
        </div>

        <div className="banner-img">
          <img src={capa} alt="Tiago" />
        </div>
      </div>

      <ArrowButton />
    </header>
  );
}

export default Header;
