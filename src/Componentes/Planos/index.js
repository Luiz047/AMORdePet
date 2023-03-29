import React from "react";
import './style.css';

function Planos() {
  return (
     <section className="PlanosContainer" id="Planos">
      <h3 className="titulo">CONFIRA NOSSOS PLANOS</h3>
        <div className="PlanosBox">
         <div className="Tabela">
            <div className="card">
               <img src="./assets/Banho.png" className="imgcard"/>
               <h3 className="nomepct">Banho Normal</h3>
               <p>A partir de: <span className="preco">29,90</span></p>
               <button><a className="btn" href="https://www.supersaas.com.br/schedule/Luiz_Roberto/Petshop" target={"_blank"}>Reservar um Horario</a></button>
            </div>

            <div className="card">
               <img src="./assets/banho2.png" className="imgcard"/>
               <h3 className="nomepct">Banho e Tosa Higienica</h3>
               <p>A partir de: <span className="preco">39,90</span></p>
               <button><a className="btn" href="https://www.supersaas.com.br/schedule/Luiz_Roberto/Petshop" target={"_blank"}>Reservar um Horario</a></button>
            </div>

            <div className="card">
               <img src="./assets/BanhoCompleto.png" className="imgcard" />
               <h3 className="nomepct">Banho e Tosa Completa</h3>
               <p>A partir de: <span className="preco">49,90</span></p>
               <button><a className="btn" href="https://www.supersaas.com.br/schedule/Luiz_Roberto/Petshop" target={"_blank"}>Reservar um Horario</a> </button>
            </div>

            <div className="card" >
               <img src="./assets/PLANOS.png"  className="imgcard"/>
               <h3 className="nomepct">Plano Mensal Banho</h3>
               <p>A partir de: <span className="preco">149,99</span></p>
               <button><a className="btn" href="https://www.supersaas.com.br/schedule/Luiz_Roberto/Petshop" target={"_blank"}>Reservar um Horario</a></button>
            </div>
           
           </div>
           </div>
   </section>
  )
}

export default Planos;