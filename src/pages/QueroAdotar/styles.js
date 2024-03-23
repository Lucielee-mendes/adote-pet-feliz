import styled from "styled-components";

export const queroAdotar = styled.div`
  display: grid;
  height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

export const areaQueroAdotar = styled.div`
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  .areaBody{
    padding: 2rem 1rem;
  }

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

  .filtroPets{
    p{
        color: grey;
        margin: 2px;

    }
  }
  #tituloFiltro{
    color: #48A111;
    font-weight: bold;
    font-size: 22px;
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
export const Filter = styled.div`
    background-color: #FFF;
    border-radius: 0.5rem;
    width: 90%;
    position: relative;
    padding: 1rem;
    margin: 1rem auto;

select{
    width: 31%;
    margin: 0.5rem;
    padding: 0.2rem;
    border-radius: 0.5rem;
    border: #080808cc 2px solid;

}

.firstArea{
  width: 100%;
}
button{
    width: 7rem;
    background-color: #A5D96D;
    border: 0rem;
    color: #FFFF;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0rem 1rem;
    }


input{
    width: 30.2%;
    margin-left: 0.4rem;
    padding: 0.2rem;
    border-radius: 0.5rem;
    border: #080808cc 2px solid;
}

`

export const List = styled.div`
display: block;
text-align: center;

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

.pagination{
  button{
    background-color: #A5D96D;
      border: none;
      border-radius: 10px;
      padding: 7px;
      color: white;
      font-weight: bold;
      margin-left: 0.5rem;
      cursor: pointer;
  }
  button:disabled{
    background-color: gray;
    cursor: auto;
  }
}
`