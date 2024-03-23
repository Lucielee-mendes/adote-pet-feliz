import React, { useState, useEffect } from 'react';
import * as S from './styles'
import imgRodape from '../../imagens/LogoSample_ByTailorBrands 2.png'
import { Link, useNavigate } from 'react-router-dom';



const Footer = () => {
    const [userId, setUserId] = useState('');


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
            window.location.href = '/login';
        }
    };

    return (
        <S.FooterStyles>
            <nav>
                <div className='areaAllRodape'>
                    <div className='areaRodape'>
                        <p id='tituloFooter'>Adote</p>
                       <Link className='link' to="/queroAdotar" ><p>Pesquisar animais</p></Link> 
                    </div>
                    <div className='areaRodape' >
                        <p id='tituloFooter'>Divulgue um animal</p>
                        <Link className='link' to={`/cadastroPet/${userId}`}> <p onClick={handleProfileLinkClick}>Cadastrar animal </p> </Link>
                    </div>
                    <div className='areaRodape' >
                        <p id='tituloFooter'>Quem somos</p>
                        <Link className='link' to="/quemSomos"> <p> Sobre o adote pet feliz </p>  </Link>
                    </div>
                    <div className='areaRodape' >
                        <p id='tituloFooter'>Perfil</p>
                        <Link onClick={handleProfileLinkClick} className='link' to={`/perfilUsuario/${userId}`}>  <p> Minha pagina de perfil </p> </Link>
                        <Link className='link' to="/cadastro">  <p> Cadastre-se </p>  </Link>
                    </div>
                </div>
                <div>
                    <Link to="/">
                        <img className='imgRodape' src={imgRodape} alt="Logo" />
                    </Link>
                </div>
            </nav>
        </S.FooterStyles>
    );
};

export default Footer;