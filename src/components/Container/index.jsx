import Header from "../Header";
import AboutMe from "../AboutMe";
import Services from "../Services";
import Knowledge from "../Knowledge";
import Projects from "../Projects";
import Footer from "../Footer";
import "./style.css";

function Container() {
  return (
    <div>
      <Header />
      <Services />
      <AboutMe />
      <Knowledge />
      <Projects />
      <Footer />
    </div>
  );
}

export default Container;
