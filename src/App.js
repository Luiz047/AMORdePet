import logo from './logo.svg';
import './App.css';
import Topo from './Componentes/Topo';
import Banner from './Componentes/Banner';
import Sobre from './Componentes/Sobre';
import Banner2 from './Componentes/Banner2';
import Banner3 from './Componentes/Banner3';
import Footer from './Componentes/Footer';
import Planos from './Componentes/Planos';
import RedeSocias from './Componentes/RedeSocias';
import Iframe from './Componentes/Iframe';
import Horarios from './Componentes/Horarios';

function App() {
  return (
    <div className="App">
        <Topo/>
        <Banner/>
        <Sobre/>
        <Banner2/>
        <Planos/>
        <Banner3/>
        <RedeSocias/>
        <Iframe/>
        <Horarios />
        <Footer/>
    </div>
  );
}

export default App;
