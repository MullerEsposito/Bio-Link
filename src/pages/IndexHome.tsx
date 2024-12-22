import React from "react"
import { HomeContainer, Boxmain } from "./StylesHome"
import  profileimg  from "../images/profileimg.jpg"
import ebookicon from "../images/ebookicon.jpg"
import iconwhatsapp from "../images/iconwhatsapp.jpg"




export function Home () {
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
                     <h1 id="text-description-profile" > Lola links </h1>
                   </div>
                </div>
                     
                     {/*primeira linha da caixa de links ... */}

                    <div id="boxlinks"> 
                        <div id="first-line">
                          <button id="button-first-link">
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
                          <button id="button-second-link">
                              <div id="content-second-button">
                                <div id="box-icon-second">
                                  <img id="icon-whatsapp" src={iconwhatsapp} alt="icone do ebook"></img>
                                </div>  
                                <p id="text-button-second"> Grupo no whatsApp de promoções </p> 
                              </div> 
                            </button>

                        </div>
                      

                        {/*terceira linha da caixa de links ... */}

                        <div id="third-line"> terceira-linha 

                        </div>
                       
                        {/*quarta linha da caixa de links ... */}

                       <div id="fourth-line"> quarta-linha  

                       </div>
                   </div>
              
            </div>
            
          </Boxmain>
      </HomeContainer>
    )
}
