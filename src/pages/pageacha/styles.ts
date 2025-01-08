import styled from "styled-components"
  


export const AchaContainerMain = styled.main`
   
   
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: center;
      font-family: Roboto, sans-serif;

      background-color: #353535;

   

   #box2acha {

      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-shrink: 1;
      height: 1000px;
      max-width: 1340px;
      width: 100%;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-family: Roboto, sans-serif;
      column-gap: 20px;
      row-gap: 20px;
      unicode-bidi: isolate;

      border: solid red;



   }

   #header {
      display: flex;
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 5.70rem;
      background-color: #222222;
      box-sizing: border-box;

      
   }

   #contentheader {
      display: flex;
      max-width:1340px;
      width:100%;
      align-items: center;
      box-sizing: border-box;
      margin: auto;


   }

   #search-bar {

      display: block;
      position: relative;
      max-width: 650px;
      margin: auto;
      width: 100%;
      flex-grow: 3;
      
        
}
   #inputsearch {
      
      width: 100%;
      height: 50px;
      border-radius: 12px;
      border: 1px solid transparent;
      padding: 15px;
      font: 400 14px / 1 Poppins, sans-serif;
      transition: .3s;
      outline: #a404c8;
      box-sizing: border-box;
      display: inline-block;
      
      &:focus {
        border-color: #a404c8;
      
      }


   }

   #buttonsearch {

      width: 40px;
      height: 50px;
      position: absolute;
      border-radius: 50%;
      right: 10px;
      font-size: 20px;
      padding: 4px 0 0;
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: #a404c8;
      box-sizing: border-box;
      padding-block: 1px;
      padding-inline: 6px;
      display: inline-block;
      text-align: center;
      margin: 0rem;

      svg {
         
         overflow-clip-margin: content-box;
         overflow: hidden;
         height: 1.25rem;
         width: 1.25rem;

         color: blue;
      } 

   }
  
   
   #logolola {
      
      width: 100%;
      height: 100%;

   }

   #bannercontainer {
    
      position: absolute top;
      display: block;
      max-width: 1300px;
      width: 100%;
      margin-top: 80px;
      margin-bottom: 20px;
      max-height: 300px;
      height: 300px;
      box-sizing: border-box;

      overflow: hidden;
      position: relative;

      background-color: #fff;

      border: solid 2px red;


   }
   
   #banner img {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
   
   #banner img.active {

       opacity: 1;
      
      

   }

` 
