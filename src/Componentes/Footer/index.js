import React from "react";
import './style.css';

function Footer() {
    return (
        <div className="rodape LimitadorSecao">
        <div className="tamanho-maximo-container rodape-container">
          <div className="rodape-info">
            <h4>Entre em contato conosco:</h4>
          </div>
    
          <a className="rodape-info rodape-link" target="_blank" href="https://goo.gl/maps/1vfaCMvq2YFUboXn9">
            
    
            <p className="footP">
              
              📌 Itapema - Sc
              
            </p>
          </a>
    
          <div className="rodape-info">
            
    
            <p className="footP">
            🚘 Busca e Leva 🚘  </p>
            
          </div>
    
          <a className="rodape-info rodape-link" target="_blank" href="tel:+47991194514">
            
    
            <p className="footP">
            📳 (47) 991194514 📳
            </p>
          </a>
    
          <div className="rodape-copyright">
            © Copyright - AmordePet
          </div>
        </div>
      </div>


    )
}

export default Footer;