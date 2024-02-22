import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles'
import imgLogo from '../../imagens/image0 1logo.png'


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');


  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setIsLoggedIn(true);
      setUserId(storedUserData._id);
    } else {
      setIsLoggedIn(false);
      setUserId('');
    }
  }, []);

  return (
    <S.HeaderStyles>
      <nav>
        <div className="menu">
          <img className="logo" src={imgLogo} alt="Logo" />
          <div className="menu">
            <Link to="/quemSomos"> <p>Quem somos</p> </Link>
            <p>Quero adotar</p>
            <Link to={`/cadastroPet/${userId}`}> <p>Quero doar</p> </Link>
            {isLoggedIn ? (
            <Link to={`/perfilUsuario/${userId}`}> <button>Meu Perfil</button> </Link>
            ) : (
              <>
                <Link to="/login"> <p> Entrar </p></Link>
                <Link to="/cadastro">
                  <button>Cadastre-se</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </S.HeaderStyles>
  );
};

export default Header;