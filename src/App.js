import Header from "./components/header/header";
import Footer from "./components/footer/footer.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./estilos/footer.css";
import ContainerMovie from "./components/carrousel/containerMovie.jsx";
import { useState } from "react";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleValue = (eventValue) => {
    setSearchValue(eventValue);
  };
  return (
    <div className="App body">
      <Header onSearch={handleValue} />
      <ContainerMovie searchV={searchValue} />
      <Footer className="position-absolute p-0 w-100" />
    </div>
  );
}

export default App;
