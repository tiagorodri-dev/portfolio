import Title from "../Title";
import imageAboutMe from "../../assets/img_formatura.jpg";
import "./style.css";

function AboutMe() {
    return (
        <section className="section-sobre-mim">
            <Title name="Sobre mim" />

            <section className="sobre">
                <div>
                    <img src={imageAboutMe} className="imageAboutMe" alt="Imagem da minha formatura" />
                </div>

                <div className="sobre-mim">
                    <span>
                        Desenvolvedor de Software com mais de 2 anos de experiência e graduado em Análise e Desenvolvimento de Sistemas.
                        Tenho experiência em desenvolver soluções inovadoras nas áreas de Telecomunicações e Propriedade Intelectual,
                        sempre com foco em otimizar processos e garantir alta performance.
                    </span>
                    <span>
                        Acredito na importância de uma comunicação clara e colaborativa com clientes para entender suas necessidades
                        e criar soluções personalizadas que gerem valor. Se você busca um desenvolvedor dedicado e focado
                        em resultados, estou aqui para transformar sua ideia em realidade.
                    </span>
                    <p>Interessado em colaborar ou trazer suas ideias para o mundo digital?
                        <a href="https://api.whatsapp.com/send?phone=5589994034021&text=Ol%C3%A1,%20Tiago!%20Gostaria%20de%20conversar%20sobre%20um%20projeto." target="_blank">
                            Vamos conversar!
                        </a>
                    </p>
                </div>
            </section>
        </section>
    );
}

export default AboutMe;
