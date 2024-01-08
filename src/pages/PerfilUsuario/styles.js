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

 
  header{
    background-color: white;
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

    

  .imgLogo{
    max-width: 7rem;
    max-height: 7rem;
    margin-left: 1.5rem;
    display: block;
    
  }

  .areaCabecalho{
    align-items: center;
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    p{
      display: inline-block;
      margin-left: 1.5rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      color: #48A111;
      font-weight: bold;
    }
    button{
      border-radius: 5px;
      border: none;
      background-color: #A5D96D;
      color: white;
      font-weight: bold;
      padding: 7px;
      position: absolute;
      right: 50px;
    }
  }

  footer{
    background-color: #A5D96D;
    min-height: 1rem;
    .areaAllRodape{
      text-align: center;
    }
    .areaRodape{
      display: inline-block;
      margin: 5rem;
      margin-bottom: 0;
      margin-top: 0.5rem;
      vertical-align: top;
      color: white;
      font-weight: bold;
    }
    .imgRodape{
    max-width: 9rem;
    max-height: 9rem;
    display: block;
    text-align: center;
    margin: auto;

    }
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
    width: 20rem;
    height:20rem;
    border-radius: 10rem;
    display: inline-block;
    padding: 5px;
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
  #cidade{
    color: gray;
    margin-top: 0;

  }
  .imgContato{
   
    display: inline-block;
    img{
      max-width: 3rem;
      max-height: 3rem;
      
    }
  }
  .contato{
    display: inline-block;
    margin-left: 15px;
    
    p{
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .botao1{
    margin-top: 15px;
    margin-bottom: 10px;
    button{
      background-color: #A5D96D;
      border: none;
      border-radius: 10px;
      padding: 7px;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .botao2{
    button{
      background-color: #A5D96D;
      border: none;
      border-radius: 10px;
      padding: 7px;
      color: white;
      font-weight: bold;
      margin: 5px;
      margin-left: 0;
      cursor: pointer;
    }
  }
`
export const Divulgados = styled.div`
display: block;
#petsDivulgados{
  margin-left: 25px;
  color: #48A111;
  font-weight: bold;
}
p{
  margin-left: 25px;

}
`