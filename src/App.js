import logo from './logo.svg';
import './App.css';
import Topo from './Componentes/Topo';
import Banner from './Componentes/Banner';
import Sobre from './Componentes/Sobre';
import Banner2 from './Componentes/Banner2';
import Banner3 from './Componentes/Banner3';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
        <Topo/>
        <Banner/>
        <Sobre/>
        <Banner2/>
        <Sobre/>
        <Banner3/>
        <Sobre/>
        <Footer/>
    </div>
  );
}

export default App;
