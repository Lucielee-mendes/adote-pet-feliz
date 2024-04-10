import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles'
import imgLogo from '../../imagens/image0 1logo.png'


const Header = () => {

  // Estados para controlar se o usuário está logado e o ID do usuário
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');


  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData')); // Obtém os dados do usuário do armazenamento local
    if (storedUserData) {
      setIsLoggedIn(true); // Define como logado se os dados do usuário estiverem presentes
      setUserId(storedUserData._id); // Define o ID do usuário
    } else {
      setIsLoggedIn(false); // Define como não logado se os dados do usuário não estiverem presentes
      setUserId('');// Define o ID do usuário como vazio
    }
  }, []);

  // Função para lidar com o clique no link "Quero doar"
  const handleQueroDoarClick = () => {
    if (!isLoggedIn) {
      window.location.href = '/login';
    }
  };


  return (
    <S.HeaderStyles>
      <nav>
        <div className="menu">
        <Link to="/">
          <img className="logo" src={imgLogo} alt="Logo" />
          </Link>
          <div className="menu">
            <Link to="/quemSomos"> <p>Quem somos</p> </Link>
           <Link to="/queroAdotar"> <p>Quero adotar</p></Link> 
            <Link to={`/cadastroPet/${userId}`} > <p  onClick={handleQueroDoarClick}>Quero doar</p> </Link>
            <div>
              {isLoggedIn ? (
                <Link to={`/perfilUsuario/${userId}`}> <button>Meu Perfil</button> </Link>
              ) : (
                <>
                  <Link to="/login"> <p id='entrar'> Entrar </p></Link>
                  <Link to="/cadastro">
                    <button>Cadastre-se</button>
                  </Link>
                </>
              )}
            </div>

          </div>
        </div>
      </nav>
    </S.HeaderStyles>
  );
};

export default Header;