import React from 'react';
import * as S from './styles'
import imgRodape from '../../imagens/LogoSample_ByTailorBrands 2.png'


const Footer = () => {
    return (
        <S.FooterStyles>
            <nav>
                <div className='areaAllRodape'>
                    <div className='areaRodape'>
                        <p>Adote</p>
                        <p>Pesquisar animais</p>
                    </div>
                    <div className='areaRodape' >
                        <p>Divulgue um animal</p>
                        <p>Cadastrar animal</p>
                    </div>
                    <div className='areaRodape' >
                        <p>Quem somos</p>
                        <p>Sobre o adote pet feliz</p>
                    </div>
                    <div className='areaRodape' >
                        <p>Perfil</p>
                        <p>Minha pagina de perfil</p>
                        <p>Cadatre-se</p>
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