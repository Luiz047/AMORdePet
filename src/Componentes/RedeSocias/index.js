import React from "react";
import './style.css';

function RedeSocias() {
  return (
<section className="RDContainer" id="FaleConosco">
 <h3 className="title">CONFIRA NOSSAS REDES SOCIAIS</h3>
   <div className="RDBox">
   <nav className="links">
         <div className="lateralicon">
            <img src="./assets/instagram.png" className="imgicon"/>
            <a href="https://www.instagram.com/amordepetshop.itp/ " className="icon" target={"_blank"}>Instragram</a>
         </div>
         <div className="lateralicon" >
            <img src="./assets/logo-tiktok.png" className="imgicon"/>
            <a href="https://www.tiktok.com/@amordepetshop.itp" className="icon"target={"_blank"} >TikTok</a>
         </div>
         <div className="lateralicon" >
            <img src="./assets/WhatsApp-icone.png" className="imgicon"/>
            <a href=" " className="icon" target={"_blank"}>WhatsApp</a>
          </div>
    </nav>
          <p className="text">Bem-vindo à nossas redes sociais!
           Aqui você encontrará informações sobre nossos serviços para cuidados com pets,
           produtos exclusivos, promoções e dicas para manter seu pet saudável e feliz.
           Não deixe de seguir nossas redes para ficar por dentro de eventos e campanhas especiais.
           Interaja conosco e compartilhe suas experiências e fotos dos seus pets!
           Siga-nos agora mesmo e faça parte da nossa comunidade de apaixonados por animais. 🐶🐱✨ 
           </p>
   </div>
</section>

  )
}

export default RedeSocias;