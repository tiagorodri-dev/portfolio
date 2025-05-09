import Text from "../../ui/Title";
import { BsCodeSquare, BsHeadset, BsClipboardData,  } from "react-icons/bs";
import "./style.css";

function Services() {
  return (
    <section className="session-services" id="especialidades">
      <Text title="Minhas Especialidades" />

      <section className="container services">
        <section className="service">
          <div className="img-service">
            <BsClipboardData size={50} />
          </div>
          <div className="info-service">
            <h3>Análise de Requisitos</h3>
            <p>
              Possuo habilidades de compreensão, interpretação e tradução das
              necessidades de usuários e stakeholders em diagramas e protótipos visuais,
              facilitando o processo de análise e levantamento de requisitos.
            </p>
          </div>
        </section>

        <section className="service">
          <div className="img-service">
            <BsCodeSquare size={50} />
          </div>
          <div className="info-service">
            <h3>Desenvolvimento e Inovação</h3>
            <p>
              Atuo ativamente no desenvolvimento e manutenção de sites, sistemas web e webapps, visando sempre
              inovar e implementar as práticas e tecnologias mais atuais do mercado.
            </p>
          </div>
        </section>

        <section className="service">
          <div className="img-service">
            <BsHeadset size={50} />
          </div>
          <div className="info-service">
            <h3>Suporte especializado</h3>
            <p>
              Forneço suporte técnico eficaz no uso de ERPs, sistemas operacionais, ferramentas de escritórios e outros,
              por meio de uma comunicação clara e objetiva, conduzindo o usuário a uma jornada intuitiva e agradável.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Services;
