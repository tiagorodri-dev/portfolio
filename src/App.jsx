import { useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/GlobalStyle.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const handleLoad = () => setIsLoading(false);
    document.addEventListener("DOMContentLoaded", handleLoad);
    const loadTimeout = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(loadTimeout);
    };

  }, []);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" />
        </div>
      ) : (
        <Container />
      )}
    </>
  );
}

export default App;
