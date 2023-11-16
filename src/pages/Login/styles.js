import styled from "styled-components";

export const formulario = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide a tela em duas colunas */
  grid-template-areas: "areaImg areaForm"; /* Define as áreas */
  height: 100vh;
  overflow: hidden;
  width: 100%;
`;

export const areaImg = styled.div`
  grid-area: areaImg; /* Especifica a área da imagem */
  position: relative;
  overflow: hidden;
`;

export const ImgBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const areaForm = styled.div`
  grid-area: areaForm; 
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  text-align: center; 
 
  
  h2 {
    text-align: center;
    z-index: 1; 
    color: #48A111;
  }

  p{
    text-align: center;
    font-size: 14px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #B5FA95; /* Mesma cor de fundo */
    opacity: 0.3; /* Opacidade */
    z-index: -1; /* Coloca o pseudo-elemento abaixo do conteúdo */
  }

  .areaForm{
    width: 12rem;
    max-width: 12rem;
    min-width: 12rem;
    margin: 0 auto;
    text-align: left;    
    

    label{
      display: block;
      margin-bottom: 5px;
    }

    input{
      padding: 0.2rem;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    a{
      text-decoration: underline;
      color: blue;
      font-size: 11px;
      margin-top: auto;
      margin-left: 80px;
      display: block;
    }

   

    
  }
.buttonarea{
  button{
      cursor: pointer;
      margin-top: 10px;
      background-color: #A5D96D;
      color: white;
      border: 0 solid;
      border-radius: 5px;
      padding: 7px;
      width: 100px;
      font-weight: bold;
    }
}
  .imgLogo{
    max-width: 10rem;
    max-height: 10rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
    
  }
`;

export const area = styled.div`
background-color: #fff;
padding: 40px;
border-radius: 10px;
max-width: 25rem;
width: 100%;
margin-top: 2.5rem0;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;

p{
  font-size: 12px;
  text-decoration: underline;
  margin-top: 20px;
}
`