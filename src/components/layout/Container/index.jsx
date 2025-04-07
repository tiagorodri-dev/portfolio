import Header from "../Header";
import AboutMe from "../../sections/AboutMe";
import Services from "../../sections/Services";
import Knowledge from "../../sections/Knowledge";
import Projects from "../../sections/Projects";
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
