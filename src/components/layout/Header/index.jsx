import Menu from "../Navbar";
import scrollToSection from "../../../utils/scrollToSection";
import ParticleBackground from "../../shared/ParticleBackground/ParticleBackground";
import capa from "../../../assets/capa.webp";
import "./style.css";

function Header() {

  return (
    <header className="header-bg" id="inicio">
      <ParticleBackground />
      <Menu />

      <div className="banner container">
        <div className="banner-content">
          <h1>Consultoria <span className="destaque">profissional</span> para o seu software e aplicativo</h1>
          <p>
            Sou Tiago Alves Rodrigues, Analista de Sistemas
            focado na otimização de processos através do desenvolvimento de soluções inovadoras e intuitivas.
          </p>
          <a
            className="button-conhecer"
            href="#sobre"
            onClick={(e) => scrollToSection(e, "sobre")}
          >
            Conheça mais
          </a>
        </div>

        <div className="banner-img">
          <img src={capa} alt="Tiago" loading="lazy" width={350} height={330}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
