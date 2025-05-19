import Header from "../Header";
import AboutMe from "../../sections/AboutMe";
import Services from "../../sections/Services";
import Projects from "../../sections/Projects";
import Footer from "../Footer";
import "./style.css";

function Container() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default Container;
