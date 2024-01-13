import * as S from './styles'
import imgPerfil from '../../imagens/download (2) 1.png'
import imgContato from '../../imagens/download (4) 1.png'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PerfilUsuario = () => {
    const {userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [isOwnProfile, setIsOwnProfile] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/perfilUsuario/${userId}`);
                console.log('Response data:', response.data);

                const storedUserData = JSON.parse(localStorage.getItem('userData'));

                setUserData(response.data);

                if (storedUserData && response.data._id === storedUserData._id) {
                    setIsOwnProfile(true);
                } else {
                    setIsOwnProfile(false);
                }

            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }
        };

        if (!userData) {
            const storedUserData = JSON.parse(localStorage.getItem('userData'));
            if (storedUserData) {
                setUserData(storedUserData);
                
                if (storedUserData._id === userId) {
                    setIsOwnProfile(true);
                } else {
                    fetchData();
                }

            } else {
                fetchData();
            }
        }
    }, [userId, userData]);



    return (
        <S.perfil>
            <S.areaPerfil>
                <Header />
                <S.areaMenu >
                    <p id='home'>Home</p>
                    <p>/ Meu Perfil</p>
                </S.areaMenu>
                <S.area>
                    <S.secaoPerfil>
                        <img className='imgPerfil' src={`http://localhost:3001/files/${userData?.fotoPrincipal}` || { imgPerfil }} alt="Perfil" />
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
                            {isOwnProfile && (
                                <>
                                    <div className='botao1'>
                                        <button>Cadastrar novo pet</button>
                                    </div>
                                    <div className='botao2'>
                                        <button>Editar Perfil</button>
                                        <button onClick={() => window.location.href = "/esqueciSenha"}>Alterar Senha</button>
                                        <button>Sair</button>
                                    </div>
                                </>
                            )}
                            {!isOwnProfile && (
                                <>
                                    <div className='infoAdicional'>
                                        <div className='infoLabel'>
                                            <p>Capacidade de Vacinação:</p>
                                            <span>{userData?.possuiDisponibilidadeVacinar ? 'Sim' : 'Não'}</span>
                                        </div>
                                        <div className='infoLabel'>
                                            <p>Capacidade de Castração:</p>
                                            <span>{userData?.possuiDisponibilidadeCastrar ? 'Sim' : 'Não'}</span>
                                        </div>
                                        <div className='infoLabel'>
                                            <p>Possui Casa Telada:</p>
                                            <span>{userData?.possuiCasaTelada ? 'Sim' : 'Não'}</span>
                                        </div>
                                        <div>
                                            <p>Sobre o usuário:</p>
                                            <textarea cols="30" rows="7" value={userData?.sobreVoce || 'Não informado'} readOnly ></textarea>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </S.secaoPerfil>
                    <S.Divulgados>
                        <div className='pets'>
                            <p id='petsDivulgados'>Pets divulgados</p>
                            <p>Nenhum pet cadastrado</p>
                        </div>
                    </S.Divulgados>
                </S.area>

                <Footer />


            </S.areaPerfil>
        </S.perfil>
    );
};


export default PerfilUsuario