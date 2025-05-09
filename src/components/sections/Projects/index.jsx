import Text from "../../ui/Title";
import websiteOrcaDiversoes from "../../../assets/website_orca_diversoes.webp";
import "./style.css";

function Projects() {

  const projects = [
    {
      id: "2",
      image: websiteOrcaDiversoes,
      alt: "Imagem do projeto Orca Diversões",
      title: "Orca Diversões",
      category: "Website responsivo",
    },
  ]

  console.log(projects);

  return (
    <section className="session-projects" id="projetos">
      <Text title="Principais Projetos" subtitle="Confira os principais projetos já desenvolvidos" />

      <div className="projects">

        <div className="container">
          <div className="row gy-4">
            {projects.map((project) => (
              <>
                <div className="col-md-6 col-lg-6" key={project.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <img src={project.image} className="card-img-top" alt={project.alt} />
                  </div>
                </div>
                <div>
                  <h6 className="card-title text-white fs-5 fw-bold">{project.title}</h6>
                  <h6 className="card-subtitle mt-2 text-uppercase fw-lighter text-white">{project.category}</h6>
                </div>
              </>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
