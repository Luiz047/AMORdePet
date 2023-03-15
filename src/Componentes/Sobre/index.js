import React from "react";
import './style.css'

function Sobre () {
   return(
         <section className="SOBRE" id="Sobre">
           <div className="Boxsobre LaguraMax"> 
              <h2>O QUE É O AMORdePet ?</h2>
              <div className="lateralline"> 
                <img src="./assets/dogs.png"/>
              <p>O Amor de Pet é o pet shop perfeito para quem procura um atendimento diferenciado 
                e de alta qualidade para o seu amiguinho peludo!
                Com uma equipe experiente e apaixonada por animais,
                 oferece serviços de banho e tosa, o ambiente é super animado e descontraído,
                    proporcionando um clima acolhedor tanto para os bichinhos quanto para seus donos.
                     Se você valoriza o amor e o cuidado com seu pet, o Amor de Pet é o lugar certo para você.
                      Venha conhecer e se encantar com esse pet shop moderno, descolado e cheio de personalidade! </p>
                      </div>
           </div>
         </section>
    )
}

export default Sobre;