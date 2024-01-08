import * as S from './styles'
import imgLogo from '../../imagens/image0 1logo.png'
import imgPerfil from '../../imagens/download (2) 1.png'
import imgContato from '../../imagens/download (4) 1.png'
import imgRodape from '../../imagens/LogoSample_ByTailorBrands 2.png'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PerfilUsuario = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/perfilUsuario/${userId}`);
                console.log('Response data:', response.data);
                setUserData(response.data);

            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        if (!userData) {
            const storedUserData = JSON.parse(localStorage.getItem('userData'));
            if (storedUserData) {
                setUserData(storedUserData);
            } else {
                fetchData();
            }
        }
    }, [userId, userData]);
        
 
    return (
        <S.perfil>
            <S.areaPerfil>
                <header>
                    <nav>
                        <div className='areaCabecalho'>
                            <img className='imgLogo' src={imgLogo} alt="Logo" />
                            <div className='areaCabecalho'>
                                <p>Quem somos</p>
                                <p>Quero adotar</p>
                                <p>Quero doar</p>
                                <button>Meu Perfil</button>
                            </div>
                        </div>
                    </nav>
                </header>
                <S.areaMenu >
                    <p id='home'>Home</p>
                    <p>/ Meu Perfil</p>
                </S.areaMenu>
                <S.area>
                    <S.secaoPerfil>
                        <img className='imgPerfil' src={imgPerfil} alt="Perfil" />
                        <div className='informacoes'>
                            <p id='nome'>{userData?.nome || 'Nome Usuario'}</p>
                            <p id='cidade'>{`${userData?.cidade || 'Cidade'}, ${userData?.estado || 'Estado'}`}</p>
                            <div className='imgContato'>
                                <img src={imgContato} alt="Contato" />
                            </div>
                            <div className='contato'>
                                <p>Contatos</p>
                                <p>E-mail: {userData?.email || 'N/A'}</p>
                                <p>WhatsApp: {userData?.whatsApp ? userData.whatsApp : 'N/A'}</p>
                            </div>
                            <div className='botao1'>
                                <button>Cadastrar novo pet</button>
                            </div>
                            <div className='botao2'>
                                <button>Editar Perfil</button>
                                <button onClick={() => window.location.href = "/esqueciSenha"}>Alterar Senha</button>
                                <button>Sair</button>
                            </div>
                        </div>
                    </S.secaoPerfil>
                    <S.Divulgados>
                        <div className='pets'>
                            <p id='petsDivulgados'>Pets divulgados</p>
                            <p>Nenhum pet cadastrado</p>
                        </div>
                    </S.Divulgados>
                </S.area>

                <footer>
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
                </footer>



            </S.areaPerfil>
        </S.perfil>
    );
};


export default PerfilUsuario