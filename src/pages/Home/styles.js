import styled from "styled-components";

export const perfil = styled.div`
  display: grid;
  height: 100vh;
  overflow-y: auto;
  width: 100%;

  
  @media (max-width: 600px) {
    max-width: 100%;
    
   }
   
   `;

export const areaPerfil = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .areaBody{
    padding: 2rem;

    @media (max-width: 600px) {
        text-align: center;
      }
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
    
    @media (max-width: 600px) {
            max-width: 100%;
   }
    img{
        width: 100%;

        @media (max-width: 600px) {
            max-width: 100%;
            overflow: hidden;
            object-fit: contain;
   }
       
    }
  }

  .petsCadastrados{
    
    @media (max-width: 600px) {
            max-width: 100%;
            overflow: auto;
   }
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

  @media (max-width: 600px) {
       
            display: block;

 
   }
 
}
.CardContainer {
  width: 47% ; /* largura do card */
  border: 1px solid #48A111;
  border-radius: 8px;
  padding: 16px;
  margin: 0.5rem;
  background-color: white;
  display: flex;
  align-items: center;


  @media (max-width: 600px) {
            width: 100%;
            text-align: center;
            display: block;
            padding: 0px;

 
   }
   
}


`;

export const petList = styled.div`




@media (max-width: 600px) {
            width: 100%;
            text-align: center;

            #petLink{
width: 100%;
  text-align: center;
}
   }
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

    @media (max-width: 600px) {
      
      width: 14rem;
      height: 14rem;
      display: block;
      margin: 0.5rem auto;
    }
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
    width: 100%; 
    height: 70%; 
    object-fit: cover; 
    border-bottom-left-radius: 0; 
    border-bottom-right-radius: 0;
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
