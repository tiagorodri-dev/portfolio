import { useEffect, useState } from "react";
import Container from "./components/Container";
import "./styles/GlobalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const handleLoad = () => setIsLoading(false);

    document.addEventListener("DOMContentLoaded", handleLoad);

    const loadTimeout = setTimeout(() => setIsLoading(false), 5000);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(loadTimeout);
    };
  }, []);


  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      ) : (
        <Container />
      )}
    </div>
  );
}

export default App;
