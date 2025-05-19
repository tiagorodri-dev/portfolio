import Text from "../../ui/Title";
import websiteOrcaDiversoes from "../../../assets/website_orca_diversoes.webp";
import sistemaMercadinhoRodrigues from "../../../assets/sistema_mercadinho_rodrigues.webp";
import websiteSalaoDoIrlando from "../../../assets/website_salao_do_irlando.webp";
import "./style.css";

function Projects() {

  const projects = [
    {
      id: "1",
      image: sistemaMercadinhoRodrigues,
      alt: "Imagem do projeto Sistema Mercadinho Rodrigues",
      title: "Mercadinho Rodrigues",
      category: "Sistema web responsivo",
    },

    {
      id: "2",
      image: websiteOrcaDiversoes,
      alt: "Imagem do projeto Orca Diversões",
      title: "Orca Diversões",
      category: "Website responsivo",
    },

    {
      id: "3",
      image: websiteSalaoDoIrlando,
      alt: "Imagem do projeto Salão do Irlando",
      title: "Salão do Irlando",
      category: "Website responsivo",
    }
  ]

  console.log(projects);

  return (
    <section className="session-projects" id="projetos">
      <Text title="Principais Projetos" subtitle="Confira as principais soluções já desenvolvidas e as tecnologias que utilizo no dia a dia" />

        <div className="container projects">
          <div className="row gy-4">
            {projects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-3 py-4">
                <div>
                  <img src={project.image} className="card-img-top" alt={project.alt} />
                </div>
                <div>
                  <h6 className="card-title text-white fs-5 fw-bold">{project.title}</h6>
                  <h6 className="card-subtitle mt-2 text-uppercase fw-lighter text-white">{project.category}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}

export default Projects;
