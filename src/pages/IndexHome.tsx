import { HomeContainer, Boxmain } from "./StylesHome"
import profileimg from "../images/profileimg.jpg"



export function Home () {
    return (
      <HomeContainer>
          <Boxmain>
            <div id="box2">
                <div id="header">
                   <div id="profile">
                     <img id="profileimg" src={profileimg} alt="Imagem de perfil"/>
                   </div>
                   <div id="box-description-profile"> 
                     <h1 id="text-description-profile" > Lola links </h1>
                   </div>
                </div>
                   
                   <div id="boxlinks"> 
                      <div id="first-line">
                        <button id="button-first-link">
                          <div id="text-button">
                            <div id="box-icon-first"></div>
                            <p id="content-text"> primeira linha </p> 
                          </div> 

                        </button>

                      </div>
                      
                      <div id="second-line"> segunda-linha 

                      </div>
                      
                      <div id="third-line"> terceira-linha 

                      </div>
                      
                      <div id="fourth-line"> quarta-linha  

                      </div>
                   </div>
              
            </div>
            
          </Boxmain>
      </HomeContainer>
    )
}
