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
  padding: 40px;
  box-sizing: border-box;
   
`
export const secaoPerfil = styled.div`
display: block;
  .imgPerfil{
    width: 18rem;
    height:18rem;
    display: inline-block;
    padding: 10px;
  }
  .informacoes{
    display: inline-block;
    vertical-align: top;
  }
  #nome{
      color: #48A111;
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 0;
    }
  #info{
    color: gray;
    margin-top: 0;

  }

  .infoContainer{
    display: inline-block;
    
  }
  .imgLocal{
    display: inline-block;
    img{
      max-width: 3rem;
      max-height: 3rem;
      vertical-align: middle;
      
    }
}
    .imgProp{

        img{
            max-width: 3rem;
            max-height: 3rem;
            vertical-align: middle;
        }
    }
  
  .info{
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 15px;
    
    
    p{
      margin-top: 0;
      margin-bottom: 0;
    }
  }


  .infoLabel{
    
    p, span{
      display: inline-block;
      margin: 5px;
      
    }
    
  }
`