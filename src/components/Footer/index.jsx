import { BsFillEnvelopeFill, BsFillGeoAltFill, BsGithub, BsLinkedin, BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import "./style.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">

          <div className="col-md-5 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">Sobre mim</h5>
            <p>
              Desenvolvo soluções personalizadas e inovadoras para atender às
              suas necessidades.
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">Links Úteis</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white text-decoration-none">Início</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Serviços</a></li>
              <li><a href="#about" className="text-white text-decoration-none">Sobre</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contato</a></li>
            </ul>
          </div>

          <div className="col-md-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-warning">Contato</h5>
            <ul className="list-unstyled">
              <li><BsTelephoneFill className="me-2" /> (89) 99403-4021</li>
              <li><BsFillEnvelopeFill className="me-2" /> tiagoarodrigues.dev@gmail.com</li>
              <li><BsFillGeoAltFill className="me-2" /> Floriano, PI</li>
            </ul>

            <div className="mt-3">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3"><BsGithub /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3"><BsLinkedin /></a>
              <a href="https://wa.me/5589994034021" target="_blank" rel="noopener noreferrer" className="text-white"><BsWhatsapp /></a>
            </div>
          </div>

        </div>

        <div className="row align-items-center mt-4">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Tiago Alves Rodrigues. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
