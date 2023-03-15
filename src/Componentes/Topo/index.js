import './style.css';
import React from 'react';

function Topo() {
  return (
    <header id="topo" className="topo LaguraMax">
        <figure>
      <img src="./assets/logoAPET.png" alt="logomarca" />
       </figure>
      <nav className='Link'>
        <a href="#Sobre"> Sobre </a>
        <a href="#Planos"> Planos </a>
        <a href="#FaleConosco"> Fale conosco </a>
      </nav>
    </header>
  );
}

export default Topo;