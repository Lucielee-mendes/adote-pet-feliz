import styled from "styled-components";

export const perfil = styled.div`
  display: grid;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

export const areaPerfil = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .areaBody{
    padding: 2rem;
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


  .Banner{
    text-align: center;
    img{
        width: 100%;
       
    }
  }

  .petsCadastrados{
    p{
        color: grey;
        margin: 2px;

    }
  }
  #titulo{
    color: #48A111;
    font-weight: bold;
    font-size: 22px;
  }

 .vermais{
  text-align: center;
  button{
    font-size: 15px;
    border-radius: 8px;
    border: none;
    background-color: white;
    color: #48A111;
    font-weight: bold;
    padding: 15px;
    cursor: pointer;
  }
 }
 #adote{
  margin-top: 35px;
 }
.Container{
  display: flex;

 
}
.CardContainer {
  width: 500px; /* largura do card */
  border: 1px solid #48A111;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}


`;

export const petList = styled.div`
display: block;

p{
  margin-left: 25px;

}
.card {
    margin:2rem;
    position: relative;
    width: 15rem;
    height: 15rem;
    display: inline-block;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
}

.iconRemove{
  position: absolute;
  right: 0rem;
  bottom: 0.5rem;
  z-index: 999;

  img{
    width: 1.8rem!important;
    height: 1.8rem!important;
  }
}

.card img {
    width: 100%; /* A imagem ocupará toda a largura do card */
    height: 70%; /* A imagem ocupará metade da altura do card */
    object-fit: cover; /* A imagem será ajustada para preencher o espaço disponível */
    border-bottom-left-radius: 0; /* Remova o arredondamento da borda inferior esquerda da imagem */
    border-bottom-right-radius: 0; /* Remova o arredondamento da borda inferior direita da imagem */
}

.card-info {
  padding  : 0.1rem;
}

.card-info p {
  text-align: left;
    margin: 2px;
    color: #000;
    font-size: 0.7rem;
}
.card-info .name{
  font-size: 15px;
  font-weight: bold;
    text-transform: capitalize;
    color: #48A111;
    margin: 2px;
}
.card-info .groupInfos{
  display: flex;
}
`
