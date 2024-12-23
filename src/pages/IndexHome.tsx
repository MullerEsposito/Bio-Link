import React from "react"
import { HomeContainer, Boxmain } from "./StylesHome"
import  profileimg  from "../images/profileimg.jpg"
import ebookicon from "../images/ebookicon.jpg"
import iconwhatsapp from "../images/iconwhatsapp.jpg"
import iconyoutube from "../images/iconyoutube.png"
import icontiktok2 from "../images/icontiktok2.png"
import iconacha from "../images/iconacha.jpg"
import iconinsta from "../images/iconinsta.jpg"




export function Home () {
      
      // função de animação de onda
    
      const WaveText = () => {

      
        return (
            <div className="text-description-profile">
                {Array.from("LoLa Links").map((char, index) => (
                    <span key={index} style={{ display: 'inline-block', animation: 'wave 1s ease-in-out infinite', animationDelay: `${index * 0.1}s` }}>
                        {char === ' ' ? '\u00A0' : char} {/* Adiciona um espaço não quebrável */}
                    </span>
                ))}
            </div>
        );
    };
    

    // Adicione a regra @keyframes diretamente ao head do documento
    const addKeyframes = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(`
            @keyframes wave {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `));
        document.head.appendChild(style);
    };

    // Chame a função para adicionar os keyframes
    addKeyframes();


    return (
        <HomeContainer>
            <Boxmain>
                <div id="box2">
                    {/*conteudo do cabeçalho */}
                    <div id="header">
                        <div id="profile">
                            <img id="profileimg" src={profileimg} alt="Imagem de perfil"/>
                        </div>
                        <div id="box-description-profile">
                            
                            <h1 id="text-description-profile" > <WaveText/>
                             
                            </h1>
                            
                            
                        </div>
                    </div>
                    {/*primeira linha da caixa de links ... */}
                    <div id="boxlinks"> 
                        <div id="first-line">
                          <button id="button-first-link" onClick={()=> window.open('https://hotmart.com/pt-br/marketplace/produtos/introducao-alimentar-de-forma-leve/U88019896P?fbclid=PAZXh0bgNhZW0CMTEAAabiI7tvFHjh7ICoN2M93mzpKSusq8kqTPpDiF8VS5oRIHxNOO145SOQqP0_aem_IDCSbH753lIAzsSqw0QlGw', '_blank')}>
                            <div id="content-first-button">
                              <div id="box-icon-first">
                                <img id="icon-ebook" src={ebookicon} alt="icone do ebook"></img>
                              </div>  
                              <p id="text-button-first"> Ebook Introdução Alimentar de forma leve </p> 
                            </div> 
                          </button>
                        </div>
                       
                        {/* segunda linha da caixa de links ... */}

                        <div id="second-line">
                          <button id="button-second-link" onClick={()=> window.open('https://chat.whatsapp.com/L6jzf9WgMOUG6ZzyQF6gaW?fbclid=PAZXh0bgNhZW0CMTEAAaaUdY_lzS1D3o4vEPzlUBEI6zprFxnTvQllax_UlTjC_VRloVKBX-jt7Qc_aem_JEx4SmiUCFz_6ZI3cPosgQ', '_blank')}>
                              <div id="content-second-button">
                                <div id="box-icon-second">
                                  <img id="icon-whatsapp" src={iconwhatsapp} alt="icone do ebook"></img>
                                </div>  
                                <p id="text-button-second"> Grupo no whatsApp de promoções </p> 
                              </div> 
                            </button>

                        </div>
                      

                        {/*terceira linha da caixa de links ... */}

                        <div id="third-line">
                            <button id="button-third-link" onClick={()=> window.open('https://www.youtube.com/@lorenafarias188','_blank')}>
                              <div id="content-third-button">
                                <div id="box-icon-third">
                                  <img id="icon-youtube" src={iconyoutube} alt="icone do youtube"></img>
                                </div>  
                                <p id="text-button-third"> Canal no Youtube </p> 
                              </div> 
                            </button>

                        </div>
                       
                        {/*quarta linha da caixa de links ... */}

                       <div id="fourth-line">
                            <button id="button-fourth-link" onClick={()=> window.open('https://www.tiktok.com/@lorenaafarias_','_blank')}>
                              <div id="content-fourth-button">
                                <div id="box-icon-fourth">
                                  <img id="icon-tiktok" src={icontiktok2} alt="icone do tiktok"></img>
                                </div>  
                                <p id="text-button-fourth"> Meu Tiktok </p> 
                              </div> 
                            </button> 

                       </div>

                       {/*quinta linha da caixa de links ... */}
                      
                       <div id="five-line">
                            <button id="button-five-link" onClick={()=> window.open('')}>
                              <div id="content-five-button">
                                <div id="box-icon-five">
                                  <img id="icon-acha" src={iconacha} alt="icone de achadinhos"></img>
                                </div>  
                                <p id="text-button-five"> Achadinhos </p> 
                              </div> 
                            </button> 
                       </div>
                          
                         {/*box do icone do instagram */} 

                       <div id="containerinsta" >
                         <div id="box-primary-icon-insta" onClick={()=> window.open('https://www.instagram.com/lorenaafarias_/')}>
                            <div id="box-secondary-icon-insta">
                              <img id="icon-insta" src={iconinsta} alt="icone insta"></img>
                            </div>
                         </div>
                       </div>


                   </div>
                   
            </div>
            
            
          </Boxmain>
      </HomeContainer>
    )
}
