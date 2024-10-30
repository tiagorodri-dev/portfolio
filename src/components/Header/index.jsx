import { useState, useEffect } from "react";
import "./style.css";
import ImageBackground from "../../assets/background-image.jpg";
import Menu from "../Menu";
import { BsChevronDown } from "react-icons/bs";

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
        typingTimeout = setTimeout(() => type(currentCharIndex + 1), 150); // Velocidade da digitação
      } else {
        // Pausa antes de apagar
        typingTimeout = setTimeout(() => erase(currentText.length), 1000);
      }
    };

    const erase = (currentCharIndex) => {
      if (currentCharIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        typingTimeout = setTimeout(() => erase(currentCharIndex - 1), 100); // Velocidade para apagar
      } else {
        // Muda para o próximo texto após apagar
        setIndex((prev) => (prev + 1) % roles.length);
        // Redefine o texto antes de iniciar a digitação do próximo
        setText(""); // Limpa o texto atual
        // Começa a digitar o próximo texto
        typingTimeout = setTimeout(() => type(), 500); // Pausa antes de digitar o próximo
      }
    };

    type(); // Inicia a digitação

    return () => clearTimeout(typingTimeout);
  }, [index]);

  return (
    <header>
      <Menu />
      <div className="img-wrapper">
        <img src={ImageBackground} alt="imagem de fundo" />
      </div>
      <div className="banner">
        <h1>{text}</h1>
        <p>Tiago Alves Rodrigues</p>
        <button
          className="arrow-down"
          onClick={() =>
            document
              .getElementById("about-me")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <BsChevronDown size={24} strokeWidth={2}/>
        </button>
      </div>
    </header>
  );
}

export default Header;