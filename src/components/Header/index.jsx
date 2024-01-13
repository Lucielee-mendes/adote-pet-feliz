import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles'
import imgLogo from '../../imagens/image0 1logo.png'


const Header = () => {
    return (
      <S.HeaderStyles>
        <nav>
          <div className="menu">
            <img className="logo" src={imgLogo} alt="Logo" />
            <div className="menu">
              <p>Quem somos</p>
              <p>Quero adotar</p>
              <p>Quero doar</p>
              <button>Meu Perfil</button>
            </div>
          </div>
        </nav>
      </S.HeaderStyles>
    );
  };
  
  export default Header;