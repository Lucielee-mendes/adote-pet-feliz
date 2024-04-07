import styled from "styled-components";

export const editarPerfil = styled.div`
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
a{
  color: #000!important;
  text-decoration: none!important;
}
#home{
  color: #48A111;
}
`;
export const area = styled.div`

  background-color: #fff;
  min-height: 100vh;
  border-radius: 10px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 1rem 6rem;
  box-sizing: border-box;
   padding: 60px;


  #cabecalho{
    text-align: center;
    color: #48A111;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 50px;;
  }

  .areaForm{
    width: 100%;
    margin: 0 auto;
    text-align: left;    
    display: inline-block;
  

    label{
      display: block;
      margin-bottom: 5px;
    }

    input{
      width: 99%;
      padding: 0.2rem 0rem;
      border-radius: 5px;
      margin-bottom: 10px;
    }

  }
  .select{
    width: 99%;
    display: inline-block;
    border-radius: 5px;
    padding: 0.2rem;
  }

  .areaField{
        width: 50%;
        display: inline-block;
        margin-bottom: 13px;
        input{
            width: 98%;
        }
       }

    #divIMG{
    max-width: 50%;
    display: inline-block;
    margin-bottom: 20px;

    input{
        max-width: 60%;
        display: inline-block;
        vertical-align: text-bottom;
        margin-right: 5px;
    }
  }
  .previewImage{
    display: inline-block;
  }
  .imgPerfil{
    width: 6rem;
    height:6rem;
    
  }

.checkboxItem{
    display: inline-block;
    label, input{
        display: inline-block; 
    }
    input{
        width: auto!important;
        margin:0.8rem;
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
      padding: 10px;
      width: 100px;
      font-weight: bold;
    }
}
`;