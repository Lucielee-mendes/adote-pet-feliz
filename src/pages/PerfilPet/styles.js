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
display: flex;
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
      text-transform: capitalize;
    }
  #info{
    color: gray;
    margin-top: 0;
    text-transform: capitalize;

  }

  .infoContainer{
    display: block;
    
  }
  .imgLocal{
    display: flex;
    img{
      max-width: 3rem;
      max-height: 3rem;
      vertical-align: middle;
      
    }
}
#local{
    display: inline-block;
    margin-left: 15px;
    margin-bottom: 15px;
    p{
      margin-top: 0;
      margin-bottom: 0;
    }
  }
    .imgProp{
      display: flex;
        img{
            max-width: 3rem;
            max-height: 3rem;
            vertical-align: middle;
        }
    }
  
  
    #infoProp{
      display: inline-block;
      margin-left: 15px;
      margin-bottom: 15px;
      color: black;
      text-decoration: underline;
      text-transform: capitalize;

    p{
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  
  .imgContato{
   
   display: inline-block;
   img{
     max-width: 2.5rem;
     max-height: 2.5rem;
     
   }
 }
 .contato{
   margin-bottom: 15px;
   img{
    display: inline-block;
   }
   .infosContato{
    display: inline-block;
    width: 80%;
    vertical-align: middle;
    margin-left: 0.5rem;
   }
   p{
     margin-top: 0;
     margin-bottom: 0;
   }
 }

 .buttonarea{
  text-align: center;
  button{
      cursor: pointer;
      margin-top: 20px;
      background-color: #A5D96D;
      color: white;
      border: 0 solid;
      border-radius: 5px;
      padding: 7px;
      width: 100px;
      font-weight: bold;
     
    }
}

`