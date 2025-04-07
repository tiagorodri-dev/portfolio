import { useState } from "react";
import Title from "../../ui/Title";
import "./style.css";
import { useGitHubAutomatedRepos, StackIcons } from "github-automated-repos";

function Projects() {
  const data = useGitHubAutomatedRepos("tiagorodri-dev", "deploy");
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="session-projects" id="projetos">
      <Title name="Projetos" />

      <div className="projects">
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {selectedProject?.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {selectedProject && (
                  <>
                    <div className="modal-image">
                      <img
                        src={selectedProject.banner}
                        alt={`${selectedProject.name} banner`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="modal-info">
                      <div className="tecnologias">
                        <h3>Tecnologias:</h3>
                        {selectedProject.topics.map((icon) => (
                          <StackIcons
                            key={icon}
                            className="stack_Icon"
                            itemTopics={icon}
                          />
                        ))}
                      </div>
                      <div className="info-project">
                        <h3>Informações do projeto:</h3>
                        <p className="description">
                          {selectedProject.description}
                        </p>
                      </div>
                      <div className="links">
                        {selectedProject.homepage && (
                          <a
                            href={selectedProject.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h3>🌐 Site</h3>
                          </a>
                        )}
                        <a
                          href={selectedProject.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3>🔗 Repositório</h3>
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {data.map((item) => (
          <div
            className="card"
            key={item.id}
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
            onClick={() => openModal(item)}
          >
            <div className="card-img-wrapper">
              <img src={item.banner} alt={`${item.name} banner`} />
            </div>
            <div className="card-info">
              <h2 className="name">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
