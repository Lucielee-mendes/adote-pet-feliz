import styled from "styled-components";

export const HeaderStyles = styled.header`
  background-color: white;
  position: relative;


  .logo {
    max-width: 7rem;
    max-height: 7rem;
    margin-left: 1.5rem;
    display: block;
  }

  .menu {
    align-items: center;
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    p {
      display: inline-block;
      margin-left: 1.5rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      color: #48A111;
      font-weight: bold;
    }

    button {
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
`;
