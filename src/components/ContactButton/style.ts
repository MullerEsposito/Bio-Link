import styled from "styled-components";

export const ContactButtonContainer = styled.div`
    background-color: rgb(235, 238, 241);
    border-radius: 14px;
    border: solid 3px red; 
    transition-duration: 0.15s;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0, 0.2, 0.5, 3);

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
        width: 100%;
        text-align: center;
        color: black;
    }

    &:hover {
        transform: scale(1.05);
    }
`