import styled from "styled-components";

export const quemSomos = styled.div`
  display: grid;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

export const areaQuemSomos= styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

 

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

`;

export const areaMenu = styled.div`
    align-items: center;
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
p{
  display: inline-block;
  margin-left: 10px;
}
#home{
  color: #48A111;
}
`


export const area = styled.div`

  background-color: #fff;
  min-height: 100vh;
  border-radius: 10px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 50px;
  box-sizing: border-box;
   

#titulo{
    color: #48A111;
    font-weight: bold;
    font-size: 23px;

}
p{
    font-size: 17px;
    text-align: justify;
}
li{
    text-align: justify;
}
.botao{
    text-align: center;
    button{
      background-color: #A5D96D;
      border: none;
      border-radius: 10px;
      padding: 10px;
      color: white;
      font-weight: bold;
      margin: 40px;
      margin-left: 50px;
      font-size: 20px;
      cursor: pointer;

    }
  }


`

  

