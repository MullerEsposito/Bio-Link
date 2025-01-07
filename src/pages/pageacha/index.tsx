import { AchaContainerMain } from "./styles"



export function PageAcha() {

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
              <div id="banner">
                <img id="logolola" src={""} alt="" />
              </div>
            </div>
        </AchaContainerMain>
            
    
    )
}