import Header from "../Header";
import AboutMe from "../../sections/AboutMe";
import Services from "../../sections/Services";
// import Technologies from "../../sections/Technologies";
// import Projects from "../../sections/Projects";
import Footer from "../Footer";
import "./style.css";

function Container() {
  return (
    <div>
      <Header />
      <Services />
      <AboutMe />
      {/* <Projects />
      <Technologies /> */}
      <Footer />
    </div>
  );
}

export default Container;
