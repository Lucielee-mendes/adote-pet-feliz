import React, { useState, useEffect } from 'react';
import * as S from './styles'
import imgRodape from '../../imagens/LogoSample_ByTailorBrands 2.png'
import { Link, useNavigate } from 'react-router-dom';



const Footer = () => {
    const [userId, setUserId] = useState('');
    const history = useNavigate();


    useEffect(() => {
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      if (storedUserData) {
        setUserId(storedUserData._id);
      } else {
        setUserId('');
      }
    }, []);

    const handleProfileLinkClick = () => {
        if (!userId) {
            history.push('/login'); // Redireciona para a página de login se o usuário não estiver logado
        }
    };

    return (
        <S.FooterStyles>
            <nav>
                <div className='areaAllRodape'>
                    <div className='areaRodape'>
                        <p id='titulo'>Adote</p>
                        <p>Pesquisar animais</p>
                    </div>
                    <div className='areaRodape' >
                        <p id='titulo'>Divulgue um animal</p>
                        <Link className ='link' to={`/cadastroPet/${userId}`}> <p> Cadastrar animal </p> </Link>
                    </div>
                    <div className='areaRodape' >
                        <p id='titulo'>Quem somos</p>
                        <Link className ='link' to="/quemSomos"> <p> Sobre o adote pet feliz </p>  </Link>
                    </div>
                    <div className='areaRodape' >
                        <p id='titulo'>Perfil</p>
                        <Link onClick={handleProfileLinkClick} className ='link' to={`/perfilUsuario/${userId}`}>  <p> Minha pagina de perfil </p> </Link>
                        <Link className ='link' to="/cadastro">  <p> Cadastre-se </p>  </Link>
                    </div>
                </div>
                <div>
                    <img className='imgRodape' src={imgRodape} alt="Logo" />

                </div>
            </nav>
        </S.FooterStyles>
    );
};

export default Footer;