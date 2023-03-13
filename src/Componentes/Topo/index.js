import './style.css';
import React from 'react';

function Topo() {
  return (
    <header id="topo" className="topo LaguraMax">
        <figure>
      <img src="./assets/logoAPET.png" alt="logomarca" />
       </figure>
      <nav className='Link'>
        <a href="#informacoes"> INFORMAÇÕES </a>
        <a href="#contatos"> CONTATOS </a>
        <a href="#horarios"> HORÁRIOS </a>
      </nav>
    </header>
  );
}

export default Topo;