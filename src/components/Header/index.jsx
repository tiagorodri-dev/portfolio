import './style.css';
import ImageBackground from "../../assets/background-image.jpg";

function Header() {
    return (
        <header>
            <div className="img-wrapper">
                <img src={ImageBackground} alt="imagem de fundo" />
            </div>
            <div className="banner">
                <h1>Desenvolvedor Web & Analista de Sistemas</h1>
                <p>Tiago Alves Rodrigues</p>
            </div>
        </header>
    )
}

export default Header