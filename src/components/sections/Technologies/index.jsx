import AnimatedSection from "../../ui/AnimatedSection";
import Text from "../../ui/Title";
import "./style.css";

function Technologies() {
  const technologies = [
    {
      id: 1,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },

    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },

    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },

    {
      id: 4,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
    },

    {
      id: 5,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    },

    {
      id: 6,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
    },

    {
      id: 7,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },

    {
      id: 8,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },

    {
      id: 9,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },

    {
      id: 10,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },

    {
      id: 11,
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
  ];

  return (
    <section className="session-technology">
      <div className="technologies-wrapper">
        <AnimatedSection>
          <Text title="Tecnologias e Ferramentas" subtitle="As principais tecnologias utilizadas" />

          <div className="technologies">
            {technologies.concat(technologies).map((stack) => (
              <div className="technology" key={stack.id}>
                <img
                  className="image-technology"
                  src={stack.image}
                  alt="Tecnologia"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Technologies;
