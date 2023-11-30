import Header from "./components/header/header";
import Footer from "./components/footer/footer.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./estilos/footer.css";
import ContainerMovie from "./components/carrousel/containerMovie.jsx";

function App() {
  return (
    <div className="App body">
      <Header />
      <ContainerMovie />
      <Footer className="position-absolute p-0 w-100" />
    </div>
  );
}

export default App;
