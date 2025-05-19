import "./style.css";

function Technologies() {
  const technologies = [
    {
      id: 1,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "JavaScript",
    },

    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      name: "TypeScript",
    },

    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
    },

    {
      id: 4,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      name: "Vite",
    },

    {
      id: 5,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
      name: "HTML5",
    },

    {
      id: 6,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
      name: "CSS3",
    },

    {
      id: 7,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      name: "Bootstrap",
    },

    {
      id: 8,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      name: "Node.js",
    },

    {
      id: 9,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      name: "Firebase",
    },

    {
      id: 10,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "Git",
    },

    {
      id: 11,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      name: "Figma",
    },
  ];

  return (
    <section className="session-technology">
      <div className="technologies-wrapper">
          <div className="technologies">
            {technologies.concat(technologies).map((stack) => (
              <div className="technology" key={stack.id}>
                <img
                  className="image-technology"
                  src={stack.image}
                  alt="Tecnologia"
                />
                <span className="text-white">{stack.name}</span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Technologies;
