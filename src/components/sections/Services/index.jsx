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
              Possuo habilidades de compreensão e interpretação das necessidades do usuário,
              facilitando o processo de
              análise e levantamento de requisitos. Traduzindo essas necessidades em diagramas e protótipos visuais.
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
              Forneço suporte técnico eficaz no uso de ERPs, sistemas operacionais, de escritórios e entre outros.
              Conduzindo o usuário ao entendimento claro e proporcionando-lhe uma experiência única e agradável.
            </p>
          </div>
        </section>

        {/* <section className="service">
          <div className="img-service">
            <BsGearWideConnected size={50} />
          </div>
          <div className="info-service">
            <h3>Melhoria de processos</h3>
            <p>
              Com um olhar atento a melhoria de processos, costumo identificar lacunas e propor soluções que otimizam o fluxo de trabalho, aumentando a eficiência e reduzindo custos.
              Alianhando tecnologia, processos e inovação
            </p>
          </div>
        </section> */}
      </section>
    </section>
  );
}

export default Services;
