import Title from "../Title"
import "./style.css"

function Knowledge() {
    return (
        <section className="session-knowledge">
            <Title name="Conhecimentos"/>

            <div className="knowledges">
                <div className="knowledge">
                    <img className="image-knowledge" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <h3 className="text-knowledge">Typescript</h3>
                </div>

                <div className="knowledge">
                    <img className="image-knowledge" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <h3 className="text-knowledge">React</h3>
                </div>

                <div className="knowledge">
                    <img className="image-knowledge" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    <h3 className="text-knowledge">Node.JS</h3>
                </div>

                <div className="knowledge">
                    <img className="image-knowledge" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                    <h3 className="text-knowledge">ExpressJS</h3>
                </div>

                <div className="knowledge">
                    <img className="image-knowledge" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                    <h3 className="text-knowledge">PHP</h3>
                </div>

                <div className="knowledge">
                    <img className="image-knowledge" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <h3 className="text-knowledge">Git</h3>
                </div>
            </div>
        </section>
    )
}

export default Knowledge