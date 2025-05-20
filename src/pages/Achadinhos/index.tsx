import { AchaContainerMain } from "./styles"
import imgbanner from "../../images/imgbanner.jpg"
import imgbannersecond from "../../images/imgbanner-2.jpg"


// Estado para controlar o índice da imagem atual
let currentBannerIndex = 0;
// Função para alternar entre as imagens do banner
function changeBannerImage(): void {
  const bannerImages = [
    document.getElementById("imgbanner1"),
    document.getElementById("imgbanner2")
  ];

  if (bannerImages && bannerImages.length > 0) {
    // Remove a classe "active" da imagem atual
    bannerImages[currentBannerIndex]?.classList.remove("active");

    // Atualiza o índice da imagem atual
    currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;

    // Adiciona a classe "active" à próxima imagem
    bannerImages[currentBannerIndex]?.classList.add("active");
  }
}
setInterval(() => {
  changeBannerImage(); // Muda a imagem do banner
}, 3000);
export function Achadinhos() {
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
          <img src={imgbanner} alt="" id="imgbanner1" />
          <img src={imgbannersecond} alt="" id="imgbanner2" />
        </div>
      </div>
    </AchaContainerMain>


  )
}