import styled from "styled-components";

export const HomeContainer = styled.main`
  background: linear-gradient(120deg, #a18cd1, #fbc2eb);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 100vh;
  width: 100%;
  line-height: 16px;
  text-size-adjust: 100%;

  @media (max-width: 768px) { // Para telas menores que 768px
      font-size: 14px; // Reduz o tamanho da fonte
      padding: 1rem; // Ajusta o padding
  }
  @media (max-width: 480px) { // Para telas menores que 480px
      font-size: 12px; // Reduz ainda mais o tamanho da fonte
      padding: 0.5rem; // Ajusta o padding
  }   
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`

export const AvatarContainer = styled.div`  
  display: block;
  height: 100%;
  line-height: 16px;
  margin-bottom: 16px;
  max-width: 120px;
  max-height: 120px;
  width: 100%;

  img {
    all: inherit;
    overflow-clip-margin: content-box;
    overflow-x: clip;
    overflow-y: clip;
    max-width: 100%;
    border-radius: 50%;
    background: linear-gradient(to right, #1d0e31, #c7a8dd);
    box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.5);
    border: solid #331255;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 580px;
  margin: 10px auto;
  padding: 5px;
`

export const LinkInstagram = styled.div`
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
    box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 100%;

    &:hover {
      transform: scale(1.3);
    }
  }
`

export const Author = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 580px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
      
  p {   
    padding-left: 1.5rem;
    cursor: pointer;
    
    font-size: x-small;
    font-family: "Molle", serif;
    font-weight: 400;
    font-style: italic;
  }
`