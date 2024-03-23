import styled from "styled-components";

export const HeaderStyles = styled.header`
  background-color: white;
  position: relative;
  padding: 5px;


  .logo {
    max-width: 7rem;
    max-height: 7rem;
    margin-left: 1.5rem;
    display: block;
    @media (max-width: 600px) {
    width: 4rem;
    }
  }

  .menu {
    align-items: center;
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;


    @media (max-width: 600px) {
      padding: 0;

      p{
        font-size: 10px;
        margin: 0!important;
        padding: 0;
      }
    }
    p {
      display: inline-block;
      margin-left: 1.5rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      color: #48A111;
      font-weight: bold;
    }


    #entrar{
      right: 9rem;
      position: absolute;
      bottom: 0.6rem;
      @media (max-width: 600px) {
        bottom: -1.5rem;
    }
    }

    button {
      border-radius: 5px;
      border: none;
      background-color: #A5D96D;
      color: white;
      font-weight: bold;
      padding: 10px;
      position: absolute;
      top: 1.6rem;
      right: 3rem;
      cursor: pointer;


      @media (max-width: 600px) {
        border-radius: 5px;
    border: none;
    background-color: #A5D96D;
    color: white;
    font-weight: bold;
    padding: 4px;
    position: absolute;
    top: 3.5rem;
    right: 2rem;
    cursor: pointer;
    }
     
    }
  }
`;
