import styled from "styled-components";

export const Boxmain = styled.main`
        
        background-color: #fdf2ed;
        box-sizing: border-box;
        display: flex;
        flex-basis: 0%;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
        font-size: 16px;
        font-stretch: 100%;
        overflow: auto;
        height: 982px;
        justify-content: space-between;
        letter-spacing: normal;
        line-height: 16px;
        padding-bottom: 64px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 64px;
        tab-size: 4;
        text-size-adjust: 100%;
        vertical-align: baseline;
        width: 100%;

        @media (max-width: 768px) { // Para telas menores que 768px
           font-size: 14px; // Reduz o tamanho da fonte
           padding: 1rem; // Ajusta o padding
       }
        @media (max-width: 480px) { // Para telas menores que 480px
           font-size: 12px; // Reduz ainda mais o tamanho da fonte
           padding: 0.5rem; // Ajusta o padding
       }
        
    
    
    #box2 {
        
        display: block;
        height: 100%;
        letter-spacing: normal;
        line-height: 16px;
        margin: 0px;
        margin-bottom: 0px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        max-width: 580px;
        padding: 0px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 5px;
        tab-size: 4;
        unicode-bidi: isolate;
        width: 100%;
        

        @media (max-width: 768px) { // Para telas menores que 768px
           font-size: 14px; // Reduz o tamanho da fonte
           padding: 0.75rem; // Ajusta o padding
       }
        @media (max-width: 480px) { // Para telas menores que 480px
           font-size: 12px; // Reduz ainda mais o tamanho da fonte
           padding: 0.5rem; // Ajusta o padding
       }

      
    }

    #header {
      
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 142px;
        letter-spacing: normal;
        width: 100%;

    }

    #profile {
        
        display: block;
        height: 100%;
        line-height: 16px;
        margin-bottom: 16px;
        max-width: 120px;
        max-height: 120px;
        width: 100%;

    }

    #profileimg {
        
        all: inherit;
        overflow-clip-margin: content-box;
        overflow-x: clip;
        overflow-y: clip;
        max-width: 100%;
        border-top-left-radius: 9999px;
        border-top-right-radius: 9999px;
        border-bottom-left-radius: 9999px;
        border-bottom-right-radius: 9999px;
    }        
     
     #box-description-profile {

       align-items: center;
       height: 30px;
       line-height: 16px;
       margin-bottom: 0px;
       margin-left: 12px;
       margin-right: 12px;
       margin-top: 0px;
       max-width: 173.812px;
       width: 100%;
        
    }

    #text-description-profile {

        display: block;
        font-family: Inter, sans-serif;
        font-feature-settings: normal;
        font-kerning: auto;
        font-optical-sizing: auto;
        font-size: 20px;
        font-size-adjust: none;
        font-stretch: 100%;
        font-style: normal;
        font-weight: 700;
        height: auto;
        letter-spacing: -0.4px;
        tab-size: 4;
        text-align: center;
        text-overflow: ellipsis;
        text-size-adjust: 100%;
        unicode-bidi: isolate;
        width: 173.812px;
        letter-spacing: 0.3rem;
       
        font-family: "Molle", serif;
        font-weight: 600;
        font-style: italic;
        .molle-regular-italic {
       }
        

    }


    #boxlinks {
        
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        margin-top: 2rem;

    }

    #containerinsta {

        margin-top: 1rem;
        width: 100%;
        height: auto;
        text-align: center;

        #icon-insta {

            display: block;
            margin: auto;
            display: block;
            height: 3rem;
            width: 3rem;

            &:hover {
       transform: scale(1.3);
       }


        }


         
    }

    #author {

        text-align: center;
        height: auto;
        max-width: 580px;
        width: 100%;
        position: absolute bottom;
        margin: auto;

        
        p {
         
            padding-left: 1.5rem;

            font-size: x-small;
            font-family: "Molle", serif;
            font-weight: 400;
            font-style: italic;
            .molle-regular-italic {
       }
        
             &:hover {
            transform: scale(1.1);
       
       }
       


    }

    }
  
`