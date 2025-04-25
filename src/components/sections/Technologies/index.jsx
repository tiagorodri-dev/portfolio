import Title from "../../ui/Title";
import "./style.css";

function Technologies() {
  const technologies = [
    {
      id: 1,
      name: "Typescript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },

    {
      id: 2,
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },

    {
      id: 3,
      name: "NodeJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },

    {
      id: 4,
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },

    {
      id: 5,
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },

    {
      id: 6,
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },

    {
      id: 7,
      name: "Bootstrap",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },

    {
      id: 8,
      name: "Javascript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },

    {
      id: 9,
      name: "Firebase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
  ];

  return (
    <section className="session-knowledge">
      <Title name="Tecnologias" />

      <div className="knowledges">
        {technologies.map((stack) => (
          <div className="knowledge" key={stack.id}>
            <img
              className="image-knowledge"
              src={stack.image}
              alt={stack.name}
            />
            <h4 className="text-knowledge">{stack.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
