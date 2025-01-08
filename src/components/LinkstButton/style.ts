import styled from "styled-components";

export const LinksButtonContainer = styled.div`
    background-color: rgb(235, 238, 241);
    border-radius: 14px;
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0, 0.2, 0.5, 3);
    margin-top: 2rem;

    /* efeito agua */

    background: rgba(255, 255, 255, 0.2); /* Fundo translúcido */
    backdrop-filter: blur(10px) saturate(150%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    box-shadow: 10px 4px 20px rgba(0, 0, 0, 0.3);
    color: #ffffff;

    box-sizing: border-box;


    a {
        display: flex;
        width: 100%;
        text-decoration: none;

        
        font-family: "Molle", serif;
        font-weight: 600;
        font-style: italic;
        .molle-regular-italic {
       }
    }

    img {
        width: 3rem;
    }

    p {
        display: block;
        width: 100%;
        text-align: center;
        margin-right: 48px;
        color: black;
        margin-block: auto;
    
    }

    &:hover {
        transform: scale(1.05);
    }
`