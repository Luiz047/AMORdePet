import React from "react";
import './style.css';

function Planos() {
  return (
     <section className="PlanosContainer" id="Planos">
        <div className="PlanosBox">
         <h3 className="titulo">CONFIRA NOSSOS PLANOS</h3>
         <div className="Tabela">
            <div className="card">
               <img src="./assets/Banho.png" className="imgcard"/>
               <h3 className="nomepct">Banho Normal</h3>
               <p>A partir de 00,00</p>
               <button>Reservar um Horario</button>
            </div>

            <div className="card">
               <img src="./assets/banho2.png" className="imgcard"/>
               <h3 className="nomepct">Banho e Tosa Higienica</h3>
               <p>A partir de 00,00</p>
               <button>Reservar um Horario</button>
            </div>

            <div className="card">
               <img src="./assets/BanhoCompleto.png" className="imgcard" />
               <h3 className="nomepct">Banho e Tosa Completa</h3>
               <p>A partir de 00,00</p>
               <button>Reservar um Horario </button>
            </div>

            <div className="card" >
               <img src="./assets/PLANOS.png"  className="imgcard"/>
               <h3 className="nomepct">Plano Mensal Banho</h3>
               <p>A partir de 00,00</p>
               <button>Reservar um Horario</button>
            </div>
           
           </div>
           </div>
   </section>
  )
}

export default Planos;