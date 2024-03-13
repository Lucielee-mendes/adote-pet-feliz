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
    background-color: #B5FA95; 
    opacity: 0.3; 
    z-index: -1; 
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
      text-transform: capitalize;

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
    margin-bottom: 15px;
    
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


  .infoLabel{
    
    p, span{
      display: inline-block;
      margin: 5px;
      
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
.card {
  position: relative;
  width: 10rem;
    height: 10rem;
    display: inline-block;
    margin: 1rem;
    background-color: #e8fddf;
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
    width: 100%; 
    height: 50%; 
    object-fit: cover; 
    border-bottom-left-radius: 0; 
    border-bottom-right-radius: 0; 
}

.card-info {
  padding  : 0.5rem;
}

.card-info p {
  text-align: left;
    margin: 0.2rem;
    color: #000;
    font-size: 0.7rem;
}
.card-info .name{
  font-weight: bold;
    text-transform: capitalize;
    color: #48A111;
}
.card-info .groupInfos{
  display: flex;
}
`