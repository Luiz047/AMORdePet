import React from "react";
import './style.css';

function Iframe() {
  return (
     <section className="container">
          <h1>NOSSA LOCALIZAÇÃO</h1>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7103.812595052429!2d-48.626251319862924!3d-27.096250299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b1262d00ee7f%3A0x1b87c013229194ac!2sAmor%20de%20Pet%20-%20Banho%20e%20Tosa!5e0!3m2!1spt-BR!2sbr!4v1678884123447!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </section>

  )
}

export default Iframe;