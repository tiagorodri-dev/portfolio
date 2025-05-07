import Text from "../../ui/Title";
import imagemAboutMe from "../../../assets/formatura.webp";
import imagemAboutMe2 from "../../../assets/formatura(1).webp"
import imagemEvento from "../../../assets/evento_cais_tech.webp";
import imagemUnifor from "../../../assets/visita_tecnica_unifor.webp";
import imagemMinicurso from "../../../assets/minicurso-reactjs.webp";
import "./style.css";

function AboutMe() {
  return (
    <section className="section-sobre-mim" id="sobre">
      <Text title="Sobre mim" />

      <section className="container sobre">

        <div className="sobre-mim">
          <h5 className="fw-bold fs-4 mb-3">
            Tiago Alves Rodrigues,
            <span>Analista de Sistemas & Desenvolvedor Front-end</span>
          </h5>
          <p>
            Sou um profissional de TI, graduado em Análise e Desenvolvimento de Sistemas e
            atuante como Desenvolvedor de Software com foco em front-end,
            com mais de 2 anos de experiência no desenvolvimento de sistemas e soluções inovadoras
            nas áreas de Telecomunicações e Propriedade Intelectual, sempre com foco em otimizar processos
            e garantir alta performance.
          </p>
          <p>
            Apaixonado por tecnologia desde muito cedo, iniciei minha trajetória
            na programação em 2018 na faculdade de Análise e Desenvolvimento de Sistemas.
            De lá para cá, venho buscando continuamente a me desenvolver dia após dia, participando de
            cursos, minicursos, eventos, workshops, etc e vivendo como um eterno aprendiz.
          </p>
          <p>
            Acredito na importância de uma comunicação clara e colaborativa com clientes para entender suas
            necessidades e criar soluções personalizadas que gerem valor.
          </p>
        </div>

        <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="carousel-image-wrapper">
                <img className="image-carousel" src={imagemAboutMe} alt="Formatura do curso de Análise e Desenvolvimento de Sistemas" />
                <span className="description-image">Formatura do curso de Análise e Desenvolvimento de Sistemas (2024)</span>
              </div>
            </div>

            <div className="carousel-item active">
              <div className="carousel-image-wrapper">
                <img className="image-carousel" src={imagemAboutMe2} alt="Formatura do curso de Análise e Desenvolvimento de Sistemas" />
                <span className="description-image">Formatura do curso de Análise e Desenvolvimento de Sistemas (2024)</span>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-image-wrapper">
                <img className="image-carousel" src={imagemEvento} alt="Professor Eric Splanger da Lewis University de Illinois, Chicago - EUA no Cais Tech" />
                <span className="description-image">Professor Eric Splanger da Lewis University de Illinois - EUA (2018)</span>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-image-wrapper">
                <img className="image-carousel" src={imagemUnifor} alt="Visita técnica ao Parque Tecnológico da UNIFOR" />
                <span className="description-image">Visita técnica ao Parque Tecnológico da UNIFOR (2018)</span>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-image-wrapper">
                <img className="image-carousel" src={imagemMinicurso} alt="Minicurso de React.js no InovaIFPI" />
                <span className="description-image">Minicurso de React.js no InovaIFPI (2024)</span>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" aria-label="Slide anterior">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" aria-label="Próximo slide">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

      </section>
    </section>
  );
}

export default AboutMe;
