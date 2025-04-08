import Title from "../../ui/Title";
import { BsCodeSquare, BsHeadset, BsClipboardData } from "react-icons/bs";
import "./style.css";

function Services() {
  return (
    <section className="session-services" id="especialidades">
      <Title name="Minhas Especialidades" />

      <section className="services">
        <section className="service">
          <div className="img-service">
            <BsClipboardData size={50} />
          </div>
          <div className="info-service">
            <h3>Análise de Requisitos</h3>
            <p>
              Possuo habilidades de compreensão e interpretação das necessidades
              do usuário com base nas regras de negócio, facilitando o processo
              de levantamento e análise de requisitos. Além disso, tenho
              proficiência em traduzir essas necessidades em soluções visuais
              por meio da criação de protótipos no Figma.
            </p>
          </div>
        </section>

        <section className="service">
          <div className="img-service">
            <BsCodeSquare size={50} />
          </div>
          <div className="info-service">
            <h3>Desenvolvimento de Software</h3>
            <p>
              Desenvolvimento de sites, landing pages, sistemas web, webapps e
              aplicativos mobile. Ofereço soluções customizadas que atendem às
              necessidades específicas de cada projeto, utilizando tecnologias
              modernas para garantir desempenho e escalabilidade.
            </p>
          </div>
        </section>

        <section className="service">
          <div className="img-service">
            <BsHeadset size={50} />
          </div>
          <div className="info-service">
            <h3>Suporte Técnico</h3>
            <p>
              Ofereço suporte técnico especializado para garantir o
              funcionamento contínuo e eficiente dos seus sistemas. Nossa equipe
              está disponível para resolver problemas técnicos, responder a
              dúvidas e fornecer orientações sobre melhores práticas.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Services;
