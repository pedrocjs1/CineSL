import Header from './components/header/header';
import Footer from './components/footer/footer.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './estilos/footer.css'

function App() {
  return (
    <div className="App body">
      <Header />
      <Footer className="position-absolute p-0 w-100" />
      <img src='https://picsum.photos/192/288'></img>

    </div>
  );
}

export default App;
