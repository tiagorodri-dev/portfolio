import Title from "../Title";
import { BsCodeSquare, BsVectorPen ,BsGlobe } from "react-icons/bs";
import "./style.css";

function Services() {
    return (
        <section className="session-services">
            <Title name="Serviços"/>

            <section className="services">

                <section className="service">
                    <div className="img-service">
                        <BsCodeSquare />
                    </div>
                    <div className="info-service">
                        <h3>Desenvolvimento de software personalizado</h3>
                        <p>Desenvolvimento de sites, landing pages, sistemas web, webapps e aplicativos mobile. Ofereço soluções customizadas que atendem às necessidades específicas de cada projeto, utilizando tecnologias modernas para garantir desempenho e escalabilidade.</p>
                    </div>
                </section>

                <section className="service">
                    <div className="img-service">
                        <BsVectorPen />
                    </div>
                    <div className="info-service">
                        <h3>Prototipagem e Design</h3>
                        <p>Criação de interfaces intuitivas e atraentes que proporcionam uma experiência de usuário memorável. Desde o design inicial até a prototipagem, foco em transformar ideias em produtos digitais visualmente impressionantes e funcionais.</p>
                    </div>
                </section>

                <section className="service">
                    <div className="img-service">
                        <BsGlobe />
                    </div>
                    <div className="info-service">
                        <h3>Posicionamento digital</h3>
                        <p>Auxílio no posicionamento estratégico da sua marca na internet através de técnicas avançadas de SEO (Search Engine Optimization) e gestão de mídias sociais (SMG). Aumente a visibilidade online e alcance seu público-alvo de forma eficaz e sustentável.</p>
                    </div>
                </section>

                {/* <section className="service">
                    <div className="img-service">
                        <BsHeadset />
                    </div>
                    <div className="info-service">
                        <h3>Suporte Técnico</h3>
                        <p>Oferecemos suporte técnico especializado para garantir o funcionamento contínuo e eficiente dos seus sistemas. Nossa equipe está disponível para resolver problemas técnicos, responder a dúvidas e fornecer orientações sobre melhores práticas, ajudando a manter seus processos funcionando sem interrupções.</p>
                    </div>
                </section> */}
            </section>
        </section>
    )

}

export default Services