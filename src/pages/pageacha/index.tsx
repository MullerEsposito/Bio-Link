import { AchaContainerMain } from "./styles"
import imgbanner from "../../images/imgbanner.jpg"
import imgbannersecond from "../../images/imgbanner-2.jpg"



export function PageAcha() {
   
    // Seleciona o contêiner do banner e todas as imagens
    const banner = document.getElementById("bannercontainer") as HTMLElement | null;
    const images = banner?.getElementsByTagName("img");

    if (banner && images && images.length > 0) {
    // Variável para rastrear a imagem ativa
    let currentIndex = 0;


    // Função para alternar as imagens
    function changeImage(): void {
    // Verifica se 'images' está definido antes de remover a classe "active"
    if (images && images.length > 0) {
        images[currentIndex].classList.remove("active");

    // Verifica se 'images' está definido antes de calcular o próximo índice
    if (images && images.length > 0) {
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe "active" à próxima imagem
        images[currentIndex].classList.add("active");
    }
    }
  }

  // Configura o intervalo para mudar as imagens a cada 2 segundos
  setInterval(changeImage, 2000); 

  }


    return (

        <AchaContainerMain>
            {/* cabeçalho  */}
            <div id="header" >
                <div id="contentheader">
                   <img id="" src={""} alt="" />

                   {/* barra de pesquisa */}
                    <form id="search-bar">
                         <input id="inputsearch" type="text" autoComplete="on" placeholder="Encontre as melhores ofertas aqui" />
                         <button id="buttonsearch" aria-labelledby="Buscar" type="submit">  
                           <svg stroke="currentColor" fill="currentcolor" stroke-width="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg> 
                         </button>
                    </form>
                </div>
            </div>
            
            <div id="box2acha" >

              {/* banner conteiner */}
              <div id="bannercontainer">
                <img src={imgbanner} alt="" className="active" />
                <img src={imgbannersecond} alt="Imagem 2" />
              </div>
            </div>
        </AchaContainerMain>
            
    
    )
}