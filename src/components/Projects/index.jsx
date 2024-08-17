import Title from "../Title";
import "./style.css";
import { useGitHubAutomatedRepos, ProjectIcons, StackIcons } from 'github-automated-repos';

function Projects() {
    const data = useGitHubAutomatedRepos("tiagorodri-dev", "deploy");
    console.log(data)

    return (
        <section className="session-projects">
            <Title name="Projetos"/>

            <div className="projects">
                { data.map((item) => {
                    return (
                        <div className="project" key={item.id}>

                            <img style={{maxWidth: '100%'}} src={item.banner}/>

                            {item.topics.map((icon) => {
                            return (
                                <ProjectIcons key={icon} className="project_Icon" itemTopics={icon} />
                            )
                            })}

                            <h2 className="name">{item.name}</h2>

                            <p className="description">{item.description}</p>

                            <div className="icons">
                                {item.topics.map((icon) => {
                                return (
                                    <StackIcons
                                        key={icon}
                                        className="stack_Icon"
                                        itemTopics={icon}
                                    />
                                )
                                })}
                            </div>

                            <div className="links">
                                <a href={item.homepage} target="_blank">
                                    <h3>🌐 Site</h3>
                                </a>
                                <a href={item.html_url} target="_blank">
                                    <h3>🔗 Repositório</h3>
                                </a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Projects