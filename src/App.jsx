import { useEffect } from "react";
import Container from "./components/Container"
import "./styles/GlobalStyle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Container/>
  )
}

export default App
