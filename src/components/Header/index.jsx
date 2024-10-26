import "./style.css";
import ImageBackground from "../../assets/background-image.jpg";
import Menu from "../Menu";

function Header() {
  return (
    <header>
      <Menu />
      <div className="img-wrapper">
        <img src={ImageBackground} alt="imagem de fundo" />
      </div>
      <div className="banner">
        <h1>Desenvolvedor Web & Analista de Sistemas</h1>
        <p>Tiago Alves Rodrigues</p>
      </div>
    </header>
  );
}

export default Header;
